const { findAllExercises, findExerciseById, findExercisesByMovementPattern } = require("../services/exercise.service");

// const updateExercise = async (req, res) => {
//     try { 
//         const userId = req.user.id; 
//         const WorkoutExerciseId = Number(req.params.id); 

//         const { sets, reps, restSeconds, order } = req.body || {}; 

//         if (isNaN(exerciseId)) return res.status(400).json({ message: "Invalid id" }); 

//         const exercise = await WorkoutExercise.findOne({ where: {id: WorkoutExerciseId}, 
//                                                 include: [{
//                                                     model: Workout, 
//                                                     required: true,
//                                                     include: [{
//                                                         model: Program,
//                                                         required: true,
//                                                         where: { userId }
//                                                     }]
//                                                 }] 
//                                             }); 

        
//         if (!WorkoutExercise) return res.status(404).json({ message: "Exercise not found" }); 

//         await exercise.update({
//             sets: sets ?? exercise.sets, 
//             reps: reps ?? exercise.reps, 
//             restSeconds: restSeconds ?? exercise.restSeconds, 
//             order: order ?? exercise.order
//         }); 

//         res.status(200).json({
//             message: "Exercise edited successfully"
//         }); 

//     } catch (err) {
//         res.status(500).json({
//             message: "Error updating Exercise", 
//             error: err.message
//         }); 
//     }; 
// }; 

// const deleteExercise = async (req, res) => {
//     try {
//         const userId = req.user.id; 
//         const WorkoutExerciseId = Number(req.params.id); 

//         if (isNaN(WorkoutExerciseId)) return res.status(400).json({ message: "Invalid id" }); 

//         const exercise = await WorkoutExercise.findOne({ where: {id: exerciseId}, 
//             include: [{
//                 model: Workout, 
//                 required: true,
//                 include: [{
//                     model: Program,
//                     required: true,
//                     where: { userId }
//                 }]
//             }] 
//         }); 


//         if (!WorkoutExercise) return res.status(404).json({ message: "Exercise not found" }); 

//         await WorkoutExercise.destroy(); 

//         res.status(200).json({
//         message: "Exercise deleted successfully", 
//         exercise
//         }); 

//     } catch (err) {
//         res.status(500).json({
//             message: "Error deleting exercise", 
//             error: err.message
//         }); 
//     }
// }; 

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

const getExercisesByCategory = async (req, res) => {
    const category = req.params.category; 

    try {
        const exercises = await findExercisesByMovementPattern(movementPattern); 

        if (!exercises) return res.status(404).json( {  message: "Exercise not found"}); 

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
    getExercises, getExerciseById, getExercisesByCategory }; 