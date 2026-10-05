const { WorkoutExercise, WorkoutSession, WorkoutSet, Exercise, sequelize } = require('../models');
const AppError = require("../utils/AppError"); 

const createWorkoutSetsForSession = async (data) => {
    const { workoutSessionId, workoutId, transaction } = data; 

    const workoutExercises = await WorkoutExercise.findAll({ where: { workoutId }, attributes: ["id", "exerciseId", "order", "sets", "reps"], 
                                                              include: [{ model: Exercise, as: "exercise", attributes: ["movementPattern"] }], order: [["order", "ASC"]], transaction }); 

    const setsToCreate = workoutExercises.flatMap((we) => { // Extract plain attributes from Sequelize instance
        const exercise = we.get({ plain: true });
        const isCardio = exercise.exercise?.movementPattern === "cardio"; 
        const targetDurationMinutes = isCardio ? Number.parseInt(exercise.reps, 10) : null;

        if (
          isCardio &&
          (!Number.isInteger(targetDurationMinutes) ||
            targetDurationMinutes < 1)
        ) {
          throw new AppError(
            500,
            "INVALID_CARDIO_PRESCRIPTION",
            "Invalid cardio duration prescription"
          );
        }
    
        // Loop from 1 to sets (inclusive)
      return Array.from({ length: exercise.sets }, (_, index) => ({
          workoutSessionId,
          workoutExerciseId: exercise.id,
          exerciseId: exercise.exerciseId,
          setNumber: index + 1,
          targetReps: isCardio ? null : exercise.reps,
          targetDurationMinutes, 
          executedReps: null,
          durationMinutes: null,
          weightKg: null,
          intensityLevel: null,
          isCompleted: false,
        })
      );
    });
    
      if (setsToCreate.length === 0) {
        return [];
      }
      // !! Single atomic insert for all sets across all exercises
      return await WorkoutSet.bulkCreate(setsToCreate, {transaction});
    
      
}; 

const patchWorkoutSet = async (userId, sessionId, setId, updateData) => {

  const setExistsAndIsAuth = await WorkoutSet.findOne({ where: { id: setId },  
                                                          include: [{ model: WorkoutSession, where: { id: sessionId, userId }}, 
                                                                    { model: Exercise, as: "exercise", attributes: [ "movementPattern" ]}
                                                          ], 
                                                      })
  
  if (!setExistsAndIsAuth) return null; 

  if (setExistsAndIsAuth?.WorkoutSession?.completedAt !== null) throw new AppError (409, "SESSION_FINISHED", "Impossible to update a set in a finished session");

  if (typeof updateData.isCompleted !== "boolean") throw new AppError( 400, "INVALID_COMPLETION_STATUS", "isCompleted must be a boolean" );

  const workoutSet = setExistsAndIsAuth; 
  const isCardio =
    workoutSet.exercise.movementPattern === "cardio";

  let normalizedData;

  if (isCardio) {
    const durationMinutes = Number(updateData.durationMinutes);
    const intensityLevel = Number(updateData.intensityLevel);

    if (
      !Number.isInteger(durationMinutes) ||
      durationMinutes < 1 ||
      durationMinutes > 180 ||
      !Number.isInteger(intensityLevel) ||
      intensityLevel < 1 ||
      intensityLevel > 10
    ) {
      throw new AppError(
        400,
        "INVALID_CARDIO_DATA",
        "Invalid input data for cardio exercise"
      );
    }

    normalizedData = {
      executedReps: null,
      weightKg: null,
      durationMinutes,
      intensityLevel,
      isCompleted: updateData.isCompleted,
    };
  } else {
    const executedReps = Number(updateData.executedReps);
    const weightKg = Number(updateData.weightKg);

    if (
      !Number.isInteger(executedReps) ||
      executedReps < 1 ||
      executedReps > 30 ||
      !Number.isFinite(weightKg) ||
      weightKg < 0 ||
      weightKg > 999.99
    ) {
      throw new AppError(
        400,
        "INVALID_STRENGTH_DATA",
        "Invalid input data for strength exercise"
      );
    }

    normalizedData = {
      executedReps,
      weightKg,
      durationMinutes: null,
      intensityLevel: null,
      isCompleted: updateData.isCompleted,
    };
  }

  return workoutSet.update(normalizedData);
};   

module.exports =  { createWorkoutSetsForSession, patchWorkoutSet }; 