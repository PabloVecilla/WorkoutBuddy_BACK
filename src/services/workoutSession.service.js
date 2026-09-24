const { Workout, Program, WorkoutSession, WorkoutSet, sequelize } = require("../models"); 
const AppError = require("../utils/AppError");

const { createWorkoutSetsForSession } = require("./workoutSet.service"); 

const getWorkoutSessionForUser = async ( userId, workoutSessionId) => {
    return await WorkoutSession.findOne({ where: { userId, id: workoutSessionId } });
};

const finishWorkoutSessionForUser = async (userId,workoutSessionId) => {
    const workoutSession = await getWorkoutSessionForUser(userId, workoutSessionId); 
    if (!workoutSession) return null; 
    if (workoutSession.isInProgress === false) throw new AppError(409, "SESSION_NOT_ACTIVE", "Unable to finish a non-active session"); 

    return workoutSession.update({
        isInProgress: false, 
        completedAt: sequelize.fn("NOW")
    }); 
}; 

const createWorkoutSessionForUser = async (userId, programId, workoutId) => {
    const workout = await Workout.findOne({where: {id: workoutId, programId}, 
                                    include: [{  model: Program, 
                                                where: { userId }, 
                                                attributes: [], 
                                                required: true }]
                                })
    if (!workout) return null; 

    const existingWorkoutSession = await WorkoutSession.findOne({ where: {userId, workoutId, completedAt: null}, 
                                                                include: [{ model: WorkoutSet, as: 'WorkoutSets' }] 
                                                            }); 

    if(existingWorkoutSession) return existingWorkoutSession; 

    return await sequelize.transaction (async (t) => {
        const createdWorkoutSession = await WorkoutSession.create({
            userId,
            workoutId,
            isInProgress: true,
            startedAt: sequelize.fn("NOW"),
            completedAt: null
        }, { transaction: t });
      
        const createdSets = await createWorkoutSetsForSession({
        workoutSessionId: createdWorkoutSession.id,
        workoutId: createdWorkoutSession.workoutId,
        transaction: t
        });
      
        // Attach created sets array to the response payload without making another DB read
        createdWorkoutSession.setDataValue('workoutSets', createdSets);
    
        return createdWorkoutSession; 
    });
};

module.exports = { getWorkoutSessionForUser, finishWorkoutSessionForUser, createWorkoutSessionForUser }; 