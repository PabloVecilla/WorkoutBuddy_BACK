const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");

const getExercises = async (req, res) => {
    const filters = req.query
    try {
        const exercises = await findAllExercises(filters); 

        return res.status(200).json({ 
            success: true, 
            message: "Exercises fetched successfully", 
            count: exercises.length,
            exercises,
        }); 

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error fetching exercises",
            error: err.message
        }); 
    }
};

const getExerciseById = async (req, res) => {
    const id = req.params.id; 

    try {
        const exercise = await findExerciseById(id); 

        if (!exercise) return res.status(404).json( {  message: "Exercise not found"}); 

        res.status(200).json({
            success: true,
            message: "Exercise found", 
            exercise
        })

    } catch (err) {
        res.status(500).json( { 
            message: "Error fetching exercise", 
            error: err.message
         }); 
    }
}; 

const getExercisesByMovementPattern = async (req, res) => {
    const movementPattern = req.params.movementPattern; 

    try {
        const exercises = await findExercisesByMovementPattern(movementPattern); 

        if (!exercises || exercises.length === 0) return res.status(404).json( {  message: "Exercise not found"}); 

        res.status(200).json({
            success: true,
            message: "Exercise found", 
            exercises
        })

    } catch (err) {
        res.status(500).json( { 
            message: "Error fetching exercises", 
            error: err.message
         }); 
    }
}; 

module.exports = { //updateExercise, deleteExercise, 
    getExercises, getExerciseById, getExercisesByMovementPattern }; 