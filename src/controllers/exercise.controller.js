const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");
const AppError = require("../utils/AppError");

const getExercises = async (req, res) => {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.max(1, parseInt(req.query.limit, 10) || 10);

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
    const movementPattern = req.params.movementPattern; 

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