const { Program, Workout, sequelize } = require('../models');
const workoutExerciseService = require('./workoutExercise.service');

const createWorkoutsForProgram = async (workoutsData, programId, transaction) => {
    console.log("Program id in workout service: ", programId); 
    for (const workoutData of workoutsData) {
        const [rows] = await sequelize.query('SELECT id from programs where id = :programId', {replacements: {programId}, transaction, logging: console.log});
        console.log("RAW SQL program lookup: ", rows); 
            // Create workout
            const addedWorkout = await Workout.create({
                dayNumber: workoutData.dayNumber,
                focus: workoutData.focus,
                programId
            }, { transaction, 
                logging: console.log
             }); 

            // Delegamos los ejercicios al servicio correspondiente (pasándole la transacción)
            await workoutExerciseService.createExercisesForWorkout({
                exercises: workoutData.exercises, 
                workoutId: addedWorkout.id, 
                transaction
            });
    }
};

const findAllWorkoutsInProgramForUser = async (userId, programId) =>
    Workout.findAll( { where: { programId },
                        include: { model: Program, where: { userId }, attributes: [] } }); 

const findWorkoutByIdInProgramForUser = async (programId, workoutId, userId) => 
    Workout.findOne({ where: { id: workoutId, 
                                programId },
                                    include: { // left join the WorkoutExercises that belong to said Workout from said Program
                                        model: Program,
                                        where: { userId },
                                        attributes: []
                                    },
    }); 

const destroyWorkoutInProgramForUser = async (workoutId, programId, userId) => {
    const workoutToDelete = await findWorkoutByIdInProgramForUser(programId, workoutId, userId); 
    if (!workoutToDelete) return 0; 

    await workoutToDelete.destroy(); 
    return 1; 
}; 


const updateWorkoutInProgramForUser = async (programId, workoutId, userId, updateData) => {
    const transaction = await sequelize.transaction(); 

    try {
        const workoutToUpdate = await Workout.findOne({ where: { id: workoutId, 
            programId },
                include: { // left join the WorkoutExercises that belong to said Workout from said Program
                    model: Program,
                    where: { userId },
                    attributes: ['frequency']
                },
                transaction
        });
        if (!workoutToUpdate) {
            await transaction.rollback();
            return null; 
        }; 

        const { dayNumber: newDayNumber } = updateData; 
        const currentDayNumber = workoutToUpdate.dayNumber; 
        const programFrequency = workoutToUpdate.Program.frequency;

        if (newDayNumber !== undefined && newDayNumber !== currentDayNumber) {
            if (newDayNumber > programFrequency) {
                const error = new Error("dayNumber is greater than program frequency"); 
                error.statusCode = 400; 
                throw error; 
            }
            const conflictingWorkout = await Workout.findOne( { where: {programId, dayNumber: newDayNumber}, transaction }); 
            if (conflictingWorkout) {
                await conflictingWorkout.update({ dayNumber: currentDayNumber }, { transaction }); 
            }
            await workoutToUpdate.update({ dayNumber: newDayNumber }, { transaction }); 
        }; 

        await transaction.commit(); 
        return workoutToUpdate;

    } catch (err) {
        await transaction.rollback(); 
        throw err; 

    }
};

module.exports = { createWorkoutsForProgram, findAllWorkoutsInProgramForUser, findWorkoutByIdInProgramForUser, destroyWorkoutInProgramForUser, updateWorkoutInProgramForUser };