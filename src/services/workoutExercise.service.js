const { WorkoutExercise, Workout, Program } = require("../models"); 

// const findAllWorkoutExercisesByUserId = async (userId) => {
//     return await WorkoutExercise.findAll({  
//         include: [{
//             model: Workout, 
//             as: "workout",
//             required: true,
//             include: [{
//                 model: Program,
//                 required: true,
//                 where: { userId }
//             }]
//         }]
//     }); 
// }; 

const findUserWorkoutExerciseById = async (userId, workoutExerciseId) => {
    return await WorkoutExercise.findOne({ where: {id: workoutExerciseId}, 
        include: [{
            model: Workout, 
            as: "workout",
            required: true,
            include: [{
                model: Program,
                required: true,
                where: { userId }
            }]
        }]
    }); 
};  

const updateWorkoutExerciseForUser = async (userId, workoutExerciseId, updates) => {
    const workoutExercise =  await findUserWorkoutExerciseById(userId, workoutExerciseId); 
    if (!workoutExercise) return null; 

    const {
        exerciseId,
        sets,
        reps,
        restSeconds,
        order
      } = updates;

    return workoutExercise.update({
        exerciseId: exerciseId ?? workoutExercise.exerciseId,
        sets: sets ?? workoutExercise.sets, 
        reps: reps ?? workoutExercise.reps, 
        restSeconds: restSeconds ?? workoutExercise.restSeconds, 
        order: order ?? workoutExercise.order
    }); 
}; 


const deleteWorkoutExerciseForUser = async (userId, workoutExerciseId) => {
        const workoutExercise =  await findUserWorkoutExerciseById(userId, workoutExerciseId); 
        if (!workoutExercise) return null
        await workoutExercise.destroy(); 
        return workoutExercise; 
}; 

const createExercisesForWorkout = async (exercises, workoutId, transaction) => {
    // Mapeamos los ejercicios con el ID del entrenamiento
    const exercisesWithId = exercises.map(exercise => ({
        ...exercise,
        workoutId
    }));

    // Insertamos usando la transacción que nos pasaron
    return await WorkoutExercise.bulkCreate(exercisesWithId, { transaction });
};


module.exports = { updateWorkoutExerciseForUser, deleteWorkoutExerciseForUser, createExercisesForWorkout }; 