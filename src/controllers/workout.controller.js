const { findAllWorkoutsInProgramForUser, findWorkoutByIdInProgramForUser, destroyWorkoutInProgramForUser, updateWorkoutInProgramForUser  } = require("../services/workout.service"); 
const AppError = require("../utils/AppError"); 

const getWorkouts = async (req, res) => {
    const userId = Number(req.user.id); 
    const programId = Number(req.params.programId); 
    
    const workouts = await findAllWorkoutsInProgramForUser(userId, programId ); 

    if (!workouts || workouts.length === 0) throw new AppError(404, "WORKOUTS_NOT_FOUND", "Workout not found"); 

    res.status(200).json({
        success: true,
        data: workouts,
        message: "Workouts found", 
        meta: {}
    }); 
};

const getWorkoutById = async (req, res) => {
    const programId = Number(req.params.programId); 
    const workoutId = Number(req.params.workoutId); 
    const userId = Number(req.user.id); 

    if (isNaN(programId) || isNaN(workoutId)) throw new AppError(400, "INVALID_ID", "Invalid id's"); 

    const workout = await findWorkoutByIdInProgramForUser(programId, workoutId, userId); 

    if (!workout) throw new AppError(404, "WORKOUT_NOT_FOUND", "Workout not found"); 

    res.status(200).json({
        success: true,
        data: workout,
        message: "Workout found", 
        meta: {}
    }); 
}; 

const deleteWorkout = async (req, res) => {
    const programId = Number(req.params.programId); 
    const workoutId = Number(req.params.workoutId); 
    const userId = Number(req.user.id); 

    if (!programId || !workoutId || !userId) throw new AppError(400, "NO_ID", "No id's provided"); 

    if (isNaN(programId)) return res.status(400).json({ message: "invalid Program id" }); 
    if (isNaN(workoutId)) return res.status(400).json({ message: "invalid Workout id" }); 
    if (isNaN(userId)) return res.status(400).json({ message: "invalid User id" }); 
// destroy returns the NUMBER of rows deleted

    const deletedCount = await destroyWorkoutInProgramForUser( workoutId, programId, userId ); 
    
    if (deletedCount === 0) throw new AppError(404, "WORKOUT_NOT_FOUND", "Workout not found");  

    res.status(200).json({
        success: true,
        data: `${deletedCount} workouts deleted`,
        message: "Workout deleted successfully", 
        meta: {}
    }); 
};

const updateWorkout = async (req, res) => {
    const programId = Number(req.params.programId); 
    const workoutId = Number(req.params.workoutId); 
    const userId = Number(req.user.id); 
    const { dayNumber }  = req.body;

    if (!Number.isInteger(programId) || !Number.isInteger(workoutId) || programId < 1|| workoutId < 1) throw new AppError(400, "INVALID_WORKOUT_ID", "Valid IDs are required"); 

    if (dayNumber === undefined || dayNumber < 1 || !Number.isInteger(dayNumber)) throw new AppError(400, "INVALID_WORKOUT_DAY_NUMBER", "Valid DayNumber required"); 

    const updatedWorkout = await updateWorkoutInProgramForUser(
        programId, 
        workoutId, 
        userId, 
        { dayNumber }
    ); 

    if (!updatedWorkout) throw new AppError(404, "WORKOUT_NOT_FOUND", "Workout not found"); 

    res.status(200).json({
        success: true,
        data: updatedWorkout,
        message: "Workout order updated successfully",
        meta: {}
    });
};

module.exports = { deleteWorkout, getWorkoutById, getWorkouts, updateWorkout }; 