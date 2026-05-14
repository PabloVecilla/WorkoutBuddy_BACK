const {Program, Workout, Exercise} = require("../models"); 
const { generateProgram } = require("../services/workoutGenerator"); 

const createProgram = async (req, res) => {
    try {
        const { name, goal, level, frequency } = req.body; 
        const userId = req.user.id

        if (!name || !goal || !level || !frequency) return res.status(400).json({
            message: "Name, goal, level and frequency required"
        }); 

        const program = await Program.create(
            { name, goal, level, frequency, userId }
        ); 

        res.status(201).json( {
            message: "Program created successfully", 
            program
        }); 

    } catch (err) { 
        res.status(500).json({
            message: "Error creating Program", 
            error: err.message
        }); 
    }
}; 

const generateProgramController = async (req, res) => {
    try {
        const userId = req.user.id; 

        const { name, goal, level, frequency } = req.body; 

        if (!name || !goal || !level || !frequency ) return res.status(400).json({ message: "All fields are required" }); 

        const generatedProgram = generateProgram({ goal, level, frequency }); 

        const addedProgram = await Program.create({userId, name, goal, level, frequency}); 

        for (let day of generatedProgram) {
            const addedWorkout = await Workout.create({dayNumber: day.dayNumber, focus: day.focus, programId: addedProgram.id})
            
            const exercisesWithId = day.exercises.map((exercise) => ({...exercise, workoutId: addedWorkout.id})); 
            
            await Exercise.bulkCreate(exercisesWithId); 
        }; 

        res.status(201).json({
            message: "Program saved successfully", 
            addedProgram
        }); 

    } catch (err) {
        res.status(500).json({
            message: "Error generating program", 
            error: err.message
        }); 
    }
}; 

const getPrograms = async (req, res) => {
    try {
        const programs = await Program.findAll({
            where: { userId: req.user.id }
        }); 

        res.status(200).json(programs); 

    } catch (err) {
        res.status(500).json({
            message: "Error finding programs", 
            error: err.message
        }); 
    }
}; 

const getProgramById = async (req, res) => {
    try {
        const programId = Number(req.params.id); 
        const userId = req.user.id; 

        if (isNaN(programId)) return res.status(400).json({ message: "Invalid id" }); 

        const program = await Program.findOne({ where: { id: programId, userId }, 
                                                include: [{ // left join the Workouts that BELONG to said user and said program
                                                        model: Workout, 
                                                        include: [{ // left join the Exercises that belong to said WOrkout from said Program of said User
                                                            model: Exercise,
                                                        }],
                                                    }], 
                                                order: [
                                                    [Workout, "dayNumber", "ASC"],
                                                    [Workout, Exercise, "order", "ASC"]
                                                ]
                                            }); 

        if (!program) return res.status(404).json({ message: "Program not found" }); 

        res.status(200).json({
            message: "Program found", 
            program
        }); 
    } catch (err) {
        res.status(500).json({
            message: "Error getting the program", 
            error: err.message
        }); 
    }
}; 

const deleteProgram = async (req, res) => {
    try {
        const userId = req.user.id; 
        const programId = Number(req.params.id); 

        if (isNaN(programId)) return res.status(400).json({ message: "invalid id" }); 
// destroy returns the NUMBER of rows deleted

        const deletedCount = await Program.destroy({ where: { id: programId, userId } }); 
        
        if (deletedCount === 0) return res.status(404).json({ message: "Program not found" }); 

        res.status(200).json({ message: "Program deleted successfully" });

    } catch (err) {
        res.status(500).json({
            message: "Error deleting Program", 
            error: err.message
        }); 
    }
}; 

const updateProgram = async (req, res) => {
    try {
        const userId = req.user.id; 
        const programId = Number(req.params.id); 

        const { name, goal, level, frequency } = req.body; 

        if (isNaN(programId)) return res.status(400).json({ message: "Invalid id" }); 

        const program = await Program.findOne({ where: { id: programId, userId } }); 
        if (!program) return res.status(404).json({ message: "Program not found" }); 

        await program.update({
            name: name ?? program.name, 
            goal: goal ?? program.goal, 
            level: level ?? program.level, 
            frequency: frequency ?? program.frequency
        }); 

        res.status(200).json({
            message: "Program edited successfully", 
            program
        }); 

    } catch (err) {
        res.status(500).json({
            message: "Error editing Program", 
            error: err.message
        }); 
    }
}

module.exports = {
    createProgram, 
    getPrograms, 
    getProgramById, 
    deleteProgram, 
    updateProgram, 
    generateProgramController
}; 