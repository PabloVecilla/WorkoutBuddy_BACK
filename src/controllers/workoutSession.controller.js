const { createWorkoutSessionForUser, getWorkoutSessionForUser, finishWorkoutSessionForUser } = require ("../services/workoutSession.service"); 
const AppError = require("../utils/AppError");

const getWorkoutSession = async (req, res) => {
    const userId = req.user.id;
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);

    if (isNaN(programId) || isNaN(workoutId)) throw new AppError(400, "INVALID_ID", "Invalid program or workout id"); 

    const workoutSession = await getWorkoutSessionForUser(userId, programId, workoutId);

    if (workoutSession.length < 1 || workoutSesion === null) throw new AppError(404, "SESSION_NOT_FOUND", "Workout Session not found"); 

    res.status(200).json({
        success: true,
        data: workoutExercises,
        message: "Workout Session found successfully",
        meta: {}
    });
};

const finishWorkoutSession = async (req, res) => {
    const userId = req.user.id; 
    const workoutSessionId = Number(req.params.sessionId); 
    if (isNaN(workoutSessionId)) throw new AppError(400, "INVALID_ID", "Invalid workoutSession id"); 

    const updatedWorkoutSession = await finishWorkoutSessionForUser(userId, workoutSessionId); 

    if (updatedWorkoutSession === null) throw new AppError(404, "SESSION_NOT_FOUND", "Workout Session not found");

    res.status(200).json({
        success: true,
        data: updatedWorkoutSession,
        message: "Session finished successfully",
        meta: {}
    });
}; 

const createWorkoutSession = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.programId); 
    const workoutId = Number(req.params.workoutId);
    if (isNaN(programId) || isNaN(workoutId)) throw new AppError(400, "INVALID_ID", "Invalid program or workout id"); 

    const createdWorkoutSession = await createWorkoutSessionForUser(userId, programId, workoutId); 

    if (!createdWorkoutSession || createdWorkoutSession === null) throw new AppError(404, "ERROR_CREATING_SESSION", "Unable to create Workout Session");

    res.status(200).json({
        success: true,
        data: createdWorkoutSession,
        message: "Session created successfully",
        meta: {}
    });
}

module.exports = { getWorkoutSession, finishWorkoutSession, createWorkoutSession }; 