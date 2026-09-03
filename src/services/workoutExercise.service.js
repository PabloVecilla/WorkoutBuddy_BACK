const { WorkoutExercise, Workout, Program, Exercise } = require("../models"); 

const getWorkoutExercisesForUser = async ( userId, programId, workoutId) => {
    return await WorkoutExercise.findAll({ where: { workoutId }, 
        include: [
            {
                model: Exercise,
                as: "exercise",
                attributes: { exclude: ["raw"]},
            },
            {
                model: Workout,
                as: "workout",
                required: true,
                where: { id: workoutId },
                include: [
                    {
                        model: Program,
                        required: true,
                        where: { id: programId, userId }
                    }
                ]
            }
        ],
        order: [["order", "ASC"]]
    });
};

const findUserWorkoutExerciseById = async (userId, programId, workoutId, workoutExerciseId) => {
    return await WorkoutExercise.findOne({ where: {id: workoutExerciseId}, 
        include: [{
            model: Workout, 
            as: "workout",
            required: true,
            where: { id: workoutId },
            include: [{
                model: Program,
                required: true,
                where: { id: programId, userId }
            }]
        }]
    }); 
};  

const updateWorkoutExerciseForUser = async (userId, programId, workoutId, workoutExerciseId, updates) => {
    const workoutExercise = await findUserWorkoutExerciseById(userId, programId, workoutId, workoutExerciseId); 
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


const deleteWorkoutExerciseForUser = async (userId, programId, workoutId, workoutExerciseId) => {
    const workoutExercise = await findUserWorkoutExerciseById(userId, programId, workoutId, workoutExerciseId);

    if (!workoutExercise) return null;

    await workoutExercise.destroy();

    return workoutExercise;
};

const createExercisesForWorkout = async ({exercises, workoutId, transaction}) => {
    // Map exercises with workout ID
    const exercisesWithId = exercises.map(exercise => ({
        ...exercise,
        workoutId
    }));

    // Insertamos usando la transacción que nos pasaron
    return await WorkoutExercise.bulkCreate(exercisesWithId, { transaction });
};

module.exports = { getWorkoutExercisesForUser, updateWorkoutExerciseForUser, deleteWorkoutExerciseForUser, createExercisesForWorkout }; 