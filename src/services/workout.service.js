const { Workout } = require('../models');
const workoutExerciseService = require('./workoutExercise.service');

const createWorkoutsForProgram = async (workoutsData, programId, transaction) => {
    await Promise.all(
        workoutsData.map(async (workoutData) => {
            // Create workout
            const addedWorkout = await Workout.create({
                dayNumber: workoutData.dayNumber,
                focus: workoutData.focus,
                programId: programId
            }, { transaction });

            // Delegamos los ejercicios al servicio correspondiente (pasándole la transacción)
            await workoutExerciseService.createExercisesForWorkout(
                workoutData.exercises, 
                addedWorkout.id, 
                transaction
            );
        })
    );
};

module.exports = { createWorkoutsForProgram };