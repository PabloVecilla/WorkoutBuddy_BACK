const { findAllWorkoutsInProgramForUser, findWorkoutByIdInProgramForUser, destroyWorkoutInProgramForUser,  } = require("../services/workout.service"); 

const getWorkouts = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.programId); 
    
    try {
        const workouts = await findAllWorkoutsInProgramForUser(userId, programId ); 

        res.status(200).json({
            message: "Workouts found", 
            workouts}); 

    } catch (err) {
        res.status(500).json({
            message: "Error finding workouts", 
            error: err.message
        }); 
    }
};

const getWorkoutById = async (req, res) => {
    try {
        const programId = Number(req.params.programId); 
        const workoutId = Number(req.params.workoutId); 
        const userId = Number(req.user.id); 

        if (isNaN(programId) || isNaN(workoutId)) return res.status(400).json({ message: "Invalid id's" }); 

        const workout = await findWorkoutByIdInProgramForUser(programId, workoutId, userId); 

        if (!workout) return res.status(404).json({ message: "Workout not found" }); 

        res.status(200).json({
            message: "Workout found", 
            workout
        }); 
    } catch (err) {
        res.status(500).json({
            message: "Error getting Workout", 
            error: err.message
        }); 
    }
}; 

const deleteWorkout = async (req, res) => {
    try {
        const programId = Number(req.params.programId); 
        const workoutId = Number(req.params.workoutId); 
        const userId = Number(req.user.id); 

        if (!programId || !workoutId || !userId) return res.status(400).json({ message: "No id's provided" });

        if (isNaN(programId)) return res.status(400).json({ message: "invalid Program id" }); 
        if (isNaN(workoutId)) return res.status(400).json({ message: "invalid Workout id" }); 
        if (isNaN(userId)) return res.status(400).json({ message: "invalid User id" }); 
// destroy returns the NUMBER of rows deleted

        const deletedCount = await destroyWorkoutInProgramForUser( workoutId, programId, userId ); 
        
        if (deletedCount === 0) return res.status(404).json({ message: "Workout not found" }); 

        res.status(200).json({ message: "Workout deleted successfully" });

    } catch (err) {
        res.status(500).json({
            message: "Error deleting Workout", 
            error: err.message
        }); 
    }
};

module.exports = { deleteWorkout, getWorkoutById, getWorkouts }; 