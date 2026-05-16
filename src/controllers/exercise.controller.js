const { Program, Workout, Exercise } = require("../models"); 
const { fetchWorkoutApiExercises, fetchWorkoutApiExerciseById } = require("../services/workoutAPI.service");

const updateExercise = async (req, res) => {
    try {
        const userId = req.user.id; 
        const exerciseId = Number(req.params.id); 

        const { externalId, source, name, category, equipment, sets, reps, restSeconds, order, muscle } = req.body || {}; 

        if (isNaN(exerciseId)) return res.status(400).json({ message: "Invalid id" }); 

        const exercise = await Exercise.findOne({ where: {id: exerciseId}, 
                                                include: [{
                                                    model: Workout, 
                                                    required: true,
                                                    include: [{
                                                        model: Program,
                                                        required: true,
                                                        where: { userId }
                                                    }]
                                                }] 
                                            }); 

        
        if (!exercise) return res.status(404).json({ message: "Exercise not found" }); 

        await exercise.update({
            externalId: externalId ?? exercise.externalId,
            source: source ?? exercise.source,
            name: name ?? exercise.name, 
            category: category ?? exercise.category, 
            equipment: equipment ?? exercise.equipment, 
            sets: sets ?? exercise.sets, 
            reps: reps ?? exercise.reps, 
            restSeconds: restSeconds ?? exercise.restSeconds, 
            order: order ?? exercise.order, 
            muscle: muscle ?? exercise.muscle
        }); 

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

const deleteExercise = async (req, res) => {
    try {
        const userId = req.user.id; 
        const exerciseId = Number(req.params.id); 

        if (isNaN(exerciseId)) return res.status(400).json({ message: "Invalid id" }); 

        const exercise = await Exercise.findOne({ where: {id: exerciseId}, 
            include: [{
                model: Workout, 
                required: true,
                include: [{
                    model: Program,
                    required: true,
                    where: { userId }
                }]
            }] 
        }); 


        if (!exercise) return res.status(404).json({ message: "Exercise not found" }); 

        await exercise.destroy(); 

        res.status(200).json({
        message: "Exercise deleted successfully", 
        exercise
        }); 

    } catch (err) {
        res.status(500).json({
            message: "Error deleting exercise", 
            error: err.message
        }); 
    }
}; 

const getExercises = async (req, res) => {
    const filters = req.query
    try {
        const exercises = await fetchWorkoutApiExercises(filters); 

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
        const exercise = await fetchWorkoutApiExerciseById(id); 

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

module.exports = { updateExercise, deleteExercise, getExercises, getExerciseById }; 