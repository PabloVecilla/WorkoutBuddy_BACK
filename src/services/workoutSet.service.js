const { WorkoutExercises, WorkoutSession, sequelize } = require('../models');
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

module.exports =  { createWorkoutSetsForSession }; 