const { updateWorkoutExerciseForUser, deleteWorkoutExerciseForUser, getWorkoutExercisesForUser } = require ("../services/workoutExercise.service"); 

const getWorkoutExercises = async (req, res) => {
    const userId = req.user.id;
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);

    if (isNaN(programId) || isNaN(workoutId)) return res.status(400).json({ message: "Invalid program or workout id" });

    try {
        const workoutExercises = await getWorkoutExercisesForUser(userId, programId, workoutId);

        if (workoutExercises.length === 0) return res.status(404).json({ message: "Workout exercises not found" });

        return res.status(200).json({ workoutExercises });

    } catch (err) {
        return res.status(500).json({
            message: "Error getting workout exercises",
            error: err.message
        });
    }
};

const updateWorkoutExercise = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);
    const workoutExerciseId = Number(req.params.id); 
    const { exerciseId, sets, reps, restSeconds, order } = req.body || {}; 
    if (isNaN(workoutExerciseId)) return res.status(400).json({ message: "Invalid workoutExercise id" }); 

    try {
        const workoutExercise = await updateWorkoutExerciseForUser(userId, programId, workoutId, workoutExerciseId, {exerciseId, sets, reps, restSeconds, order})

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
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);
    const workoutExerciseId = Number(req.params.id);

    if (isNaN(programId) || isNaN(workoutId) || isNaN(workoutExerciseId)) {
        return res.status(400).json({
            message: "Invalid resource id"
        });
    }

    try {
        const workoutExercise = await deleteWorkoutExerciseForUser(
            userId,
            programId,
            workoutId,
            workoutExerciseId
        );

        if (!workoutExercise) {
            return res.status(404).json({
                message: "Exercise not found"
            });
        }

        return res.status(200).json({
            message: "Exercise deleted successfully",
            workoutExercise
        });

    } catch (err) {
        return res.status(500).json({
            message: "Error deleting exercise",
            error: err.message
        });
    }
};

module.exports = { getWorkoutExercises, updateWorkoutExercise, deleteWorkoutExercise }; 