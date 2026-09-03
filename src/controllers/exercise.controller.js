const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");
const AppError = require("../utils/AppError");

const getExercises = async (req, res) => {
    const page = Number(req.query.page); 
    const limit = 10; 

    const exercises = await findAllExercises(page, limit); 

    return res.status(200).json({ 
        success: true, 
        data: exercises.rows,
        message: "Exercises found successfully",
        meta: {
            page,
            limit,
            total: exercises.count,
            totalPages: Math.ceil(exercises.count/10)
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