const { WorkoutExercises, WorkoutSession, WorkoutSet, sequelize } = require('../models');
const AppError = require("../utils/AppError"); 

const createWorkoutSetsForSession = async (data) => {
    const {workoutSessionId, workoutId, transaction} = data; 

    const workoutExercises = await WorkoutExercises.findAll({ where: { workoutId }, attributes: ["id", "exerciseId", "order", "sets", "reps"], order: [["order", "ASC"]], transaction }); 

    const setsToCreate = workoutExercises.flatMap((we) => { // Extract plain attributes from Sequelize instance
        const exercise = we.get({ plain: true });
        const setsList = [];
    
        // Loop from 1 to sets (inclusive)
        for (let setNum = 1; setNum <= exercise.sets; setNum++) {
          setsList.push({
            workoutSessionId,
            workoutExerciseId: exercise.id,
            exerciseId: exercise.exerciseId,
            setNumber: setNum,
            targetReps: exercise.reps,
            executedReps: null,
            weightKg: null,
            isCompleted: false,
          });
        }
    
        return setsList;
    });
    
      // !! Single atomic insert for all sets across all exercises
      if (setsToCreate.length > 0) {
        return await WorkoutSet.bulkCreate(setsToCreate, {transaction});
      }
    
      return [];
}; 

const patchWorkoutSet = async (userId, sessionId, setId, updateData) => {

    if (isNaN(Number(updateData.executedReps)) || isNaN(Number(updateData.weightKg)) || 
    !Number.isInteger(Number(updateData.executedReps)) || Number(updateData.executedReps) < 1 ||  
    Number(updateData.executedReps) > 30 || Number(updateData.weightKg) < 0 || Number(updateData.weightKg) > 999.99 ||
    updateData.isCompleted !== "true" || updateData.isCompleted !== "false" ) throw new AppError(400, "INVALID_DATA", "Invalid input data");

    const setExistsAndIsAuth = await WorkoutSet.findOne({ where: { id: setId },  
                                                            include: [{
                                                                model: WorkoutSession, 
                                                                where: { id: sessionId, userId }
                                                            }]
                                                        })
    if (!setExistsAndIsAuth) return null; 

    if (setExistsAndIsAuth?.WorkoutSession?.completedAt !== null) throw new AppError (409, "SESSION_FINISHED", "Impossible to update a set in a finished session");

    const updatedSet = await setExistsAndIsAuth.update(updateData); 

    return updatedSet; 
}; 

module.exports =  { createWorkoutSetsForSession, patchWorkoutSet }; 