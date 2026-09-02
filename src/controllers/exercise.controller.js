const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");
const AppError = require("../utils/AppError");

const getExercises = async (req, res) => {
    const page = req.query.page; 
    const limit = 10; 

    const exercises = await findAllExercises(page, limit); 

    return res.status(200).json({ 
        success: true, 
        message: "Exercises fetched successfully", 
        count: exercises.length,
        exercises,
    }); 
};

const getExerciseById = async (req, res) => {
    const id = req.params.id; 

    const exercise = await findExerciseById(id); 

    if (!exercise) throw new AppError(404, "EXERCISE_NOT_FOUND", "Exercise not found"); 

    res.status(200).json({
        success: true,
        message: "Exercise found", 
        exercise
    })
}; 

const getExercisesByMovementPattern = async (req, res) => {
    const movementPattern = req.params.movementPattern; 

    const exercises = await findExercisesByMovementPattern(movementPattern); 

    if (!exercises || exercises.length === 0) throw new AppError(404, "EXERCISE_NOT_FOUND", "Exercise not found"); 

    res.status(200).json({
        success: true,
        message: "Exercise found", 
        exercises
    })
}; 

module.exports = { //updateExercise, deleteExercise, 
    getExercises, getExerciseById, getExercisesByMovementPattern }; 