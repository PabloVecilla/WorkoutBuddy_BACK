const { findAllProgramsForUser, findProgramByIdForUser, updateProgramForUser, destroyProgramForUser, generateAndSaveProgramForUser,  } = require("../services/program.service"); 

const createProgram = async (req, res) => {
    try {
        const { name, goal, level, frequency } = req.body; 
        const userId = req.user.id

        if (!name) return res.status(400).json({
            message: "Name required"
        }); 
        if (!goal) return res.status(400).json({
            message: "Goal, level and frequency required"
        }); 
        if (!level) return res.status(400).json({
            message: "Level required"
        }); 
        if (!frequency) return res.status(400).json({
            message: "Frequency required"
        });

        const program = await generateAndSaveProgramForUser({name, goal, level, frequency, userId}); 

        if (!program) return res.status(500).json({message: "Error generating or saving program"})
            
        res.status(201).json({
            message: "Program created successfully", 
            program
        }); 

    } catch (err) {
        if(err.message.includes("BAD_REQUEST"))
            return res.status(400).json({
                message: "Invalid input data to generate Program", 
                error: err.message
            }); 

        res.status(500).json({
            message: "Error saving Program",
            error: err.message
        }); 
    }
}; 

const getPrograms = async (req, res) => {
    const userId = req.user.id; 
    try {
        const programs = await findAllProgramsForUser(userId); 

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
        const { id } = req.params; 
        const numericId = Number(id); 
        const userId = req.user.id; 

        if (isNaN(numericId)) return res.status(400).json({ message: "Invalid id" }); 

        const program = await findProgramByIdForUser( { id: numericId, userId } ); 

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
        const { id } = req.params; 

        if (!id) return res.status(400).json({ message: "No id provided" });

        const programId = Number(id); 

        if (isNaN(programId)) return res.status(400).json({ message: "invalid id" }); 
// destroy returns the NUMBER of rows deleted

        const deletedCount = await destroyProgramForUser({ programId, userId }); 
        
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

        if (isNaN(programId)) return res.status(400).json({ message: "Invalid program id" }); 

        const updatedProgram = await updateProgramForUser({ programId, userId, data: { name, goal, level, frequency } }); 

        if (!updatedProgram) return res.status(404).json({ message: "Program not found" }); 

        res.status(200).json({
            message: "Program edited successfully", 
            updatedProgram
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
    updateProgram
};