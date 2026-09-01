const { findAllProgramsForUser, findProgramByIdForUser, updateProgramForUser, destroyProgramForUser, generateAndSaveProgramForUser,  } = require("../services/program.service"); 
const AppError = require("../utils/AppError");

const createProgram = async (req, res) => {
    const { name, goal, level, frequency } = req.body; 
    const userId = req.user.id

    if (!name || !goal || !level || !frequency) throw new AppError(400, "INVALID_DATA", "Name, goal, level and frequency required"); 

    const program = await generateAndSaveProgramForUser({name, goal, level, frequency, userId}); 

    if (!program) throw new AppError(500, "DB_ERROR", "Error generating or saving program"); 
        
    res.status(201).json({
        message: "Program created successfully", 
        program
    }); 
}; 

const getPrograms = async (req, res) => {
    const userId = req.user.id; 

    const programs = await findAllProgramsForUser(userId); 
    if (!programs || programs.length === 0) throw new AppError(404, "PROGRAM_NOT_FOUND", "No programs found"); 

    res.status(200).json(programs); 
};

const getProgramById = async (req, res) => {
    const { id } = req.params; 
    const numericId = Number(id); 
    const userId = req.user.id; 

    if (isNaN(numericId)) throw new AppError(400, "INVALID_ID", "Invalid id");

    const program = await findProgramByIdForUser( { id: numericId, userId } ); 

    if (!program) throw new AppError(404, "PROGRAM:NOT_FOUND", "Program not found"); 

    res.status(200).json({
        message: "Program found", 
        program
    }); 
}; 

const deleteProgram = async (req, res) => {
    const userId = req.user.id; 
    const { id } = req.params; 

    if (!id) throw new AppError(400, "MISSING_ID", "No id provided"); 

    const programId = Number(id); 

    if (isNaN(programId)) throw new AppError(400, "INVALID_ID", "invalid id");

    // destroy returns the NUMBER of rows deleted
    const deletedCount = await destroyProgramForUser({ programId, userId }); 
    
    if (deletedCount === 0) throw new AppError(404, "PROGRAM_NOT_FOUND", "Program not found"); 

    res.status(200).json({ message: "Program deleted successfully" });
}; 

const updateProgram = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.id); 
    const { name, goal, level, frequency } = req.body; 

    if (isNaN(programId)) throw new AppError(400, "INVALID_ID", "Invalid program id"); 

    const updatedProgram = await updateProgramForUser({ programId, userId, data: { name, goal, level, frequency } }); 

    if (!updatedProgram) throw new AppError(404, "PROGRAM_NOT_FOUND", "Program not found"); 

    res.status(200).json({
        message: "Program edited successfully", 
        updatedProgram
    }); 
}

module.exports = {
    createProgram, 
    getPrograms, 
    getProgramById, 
    deleteProgram, 
    updateProgram
};