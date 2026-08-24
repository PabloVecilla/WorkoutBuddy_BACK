const { updateWorkoutExerciseForUser, deleteWorkoutExerciseForUser } = require ("../services/workoutExercise.service"); 

const updateWorkoutExercise = async (req, res) => {
    const userId = req.user.id; 
    const workoutExerciseId = Number(req.params.id); 
    const { exerciseId, sets, reps, restSeconds, order } = req.body || {}; 
    if (isNaN(workoutExerciseId)) return res.status(400).json({ message: "Invalid workoutExercise id" }); 

    try {
        const workoutExercise = await updateWorkoutExerciseForUser(userId, workoutExerciseId, {exerciseId, sets, reps, restSeconds, order})

        if (!workoutExercise) return res.status(404).json({ message: "Exercise not found" }); 

        res.status(200).json({
            message: "Exercise edited successfully"
        }); 

    } catch (err) {
        res.status(500).json({
            message: "Error updating Exercise", 
            error: err.message
        }); 
    }; 
}; 

const deleteWorkoutExercise = async (req, res) => {
    const userId = req.user.id; 
    const workoutExerciseId = Number(req.params.id); 
    if (isNaN(workoutExerciseId)) return res.status(400).json({ message: "Invalid workoutExercise id" }); 
    
    try {
        const workoutExercise = await deleteWorkoutExerciseForUser(userId, workoutExerciseId); 

        if (!workoutExercise) return res.status(404).json({ message: "Exercise not found" }); 

        res.status(200).json({
        message: "Exercise deleted successfully", 
        workoutExercise
        }); 

    } catch (err) {
        res.status(500).json({
            message: "Error deleting exercise", 
            error: err.message
        }); 
    }
}; 

module.exports = { updateWorkoutExercise, deleteWorkoutExercise }; 