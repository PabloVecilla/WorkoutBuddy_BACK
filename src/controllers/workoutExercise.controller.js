const { updateWorkoutExerciseForUser, deleteWorkoutExerciseForUser, getWorkoutExercisesForUser } = require ("../services/workoutExercise.service"); 
const AppError = require("../utils/AppError");

const getWorkoutExercises = async (req, res) => {
    const userId = req.user.id;
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);

    if (isNaN(programId) || isNaN(workoutId)) throw new AppError(400, "INVALID_ID", "Invalid program or workout id"); 

    const workoutExercises = await getWorkoutExercisesForUser(userId, programId, workoutId);

    if (workoutExercises.length === 0) throw new AppError(404, "EXERCISES_NOT_FOUND", "Workout exercises not found"); 

    return res.status(200).json({ workoutExercises });
};

const updateWorkoutExercise = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);
    const workoutExerciseId = Number(req.params.id); 
    const { exerciseId, sets, reps, restSeconds, order } = req.body || {}; 
    if (isNaN(workoutExerciseId)) throw new AppError(400, "INVALID_ID", "Invalid workoutExercise id"); 

    const workoutExercise = await updateWorkoutExerciseForUser(userId, programId, workoutId, workoutExerciseId, {exerciseId, sets, reps, restSeconds, order})

    if (!workoutExercise) throw new AppError(404, "EXERCISE_NOT_ FOUND", "Exercise not found");

    res.status(200).json({
        message: "Exercise edited successfully"
    }); 
}; 

const deleteWorkoutExercise = async (req, res) => {
    const userId = req.user.id;
    const programId = Number(req.params.programId);
    const workoutId = Number(req.params.workoutId);
    const workoutExerciseId = Number(req.params.id);

    if (isNaN(programId) || isNaN(workoutId) || isNaN(workoutExerciseId)) throw new AppError(400, "INVALID_ID", "Invalid resource id"); 

    const workoutExercise = await deleteWorkoutExerciseForUser(
        userId,
        programId,
        workoutId,
        workoutExerciseId
    );

    if (!workoutExercise) throw new AppError(404, "EXERCISE_NOT_FOUND", "Exercise not found"); 

    return res.status(200).json({
        message: "Exercise deleted successfully",
        workoutExercise
    });
};

module.exports = { getWorkoutExercises, updateWorkoutExercise, deleteWorkoutExercise }; 