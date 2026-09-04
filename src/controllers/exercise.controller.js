const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");
const AppError = require("../utils/AppError");

const getExercises = async (req, res) => {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    let limit = Math.max(1, parseInt(req.query.limit, 10) || 10);

    if (limit > 10) limit = 10; 

    const { rows, count } = await findAllExercises(page, limit);

    return res.status(200).json({
        success: true,
        data: rows,
        message: "Exercises found successfully",
        meta: {
            page,
            limit,
            total: count,
            totalPages: Math.ceil(count / limit) || 1
        }
    });
};

const getExerciseById = async (req, res) => {
    const id = req.params.id; 

    const exercise = await findExerciseById(id); 

    if (!exercise) throw new AppError(404, "EXERCISE_NOT_FOUND", "Exercise not found"); 

    res.status(200).json({ // sends final response  with modified headers  
        success: true,
        data: exercise,
        message: "Exercise found",
        meta: {}
    }); 
}; 

const getExercisesByMovementPattern = async (req, res) => {
    const movementPattern = String(req.params.movementPattern || "").trim(); 
    const acceptedMovementPatterns = [
        "shoulder_abduction",
        "shoulder_horizontal_abduction",
        "shoulder_flexion",
        "vertical_press",
        "vertical_pull",
        "horizontal_pull",
        "shoulder_shrug",
        "back_extension",
        "horizontal_press",
        "horizontal_adduction",
        "vertical_push",
        "elbow_flexion",
        "elbow_extension",
        "knee_extension",
        "squat_pattern",
        "knee_flexion",
        "hip_adduction",
        "hip_abduction",
        "hip_hinge",
        "glute_flexion",
        "calf_flexion",
        "spinal_flexion"
      ]
    if (!acceptedMovementPatterns.includes(movementPattern)) throw new AppError(401, "INVALID_MOVEMENT_PATTERN", "Invalid movement pattern"); 

    const exercises = await findExercisesByMovementPattern(movementPattern); 

    if (!exercises || exercises.length === 0) throw new AppError(404, "EXERCISE_NOT_FOUND", "Exercise not found"); 

    res.status(200).json({ // sends final response  with modified headers  
        success: true,
        data: exercises,
        message: "Exercise found",
        meta: {}
    }); 
}; 

module.exports = { //updateExercise, deleteExercise, 
    getExercises, getExerciseById, getExercisesByMovementPattern }; 