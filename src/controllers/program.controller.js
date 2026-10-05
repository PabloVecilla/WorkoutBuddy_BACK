const { findAllProgramsForUser, findProgramByIdForUser, updateProgramForUser, destroyProgramForUser, generateAndSaveProgramForUser,  } = require("../services/program.service"); 
const AppError = require("../utils/AppError");

const createProgram = async (req, res) => {
    const { name, goal, level, frequency } = req.body; 
    const userId = req.user.id

    if (!name || !goal || !level || !frequency) throw new AppError(400, "INVALID_DATA", "Name, goal, level and frequency required"); 

    const nameRegex = /^(?=.{2,60}$)[\p{L}\p{M}\d][\p{L}\p{M}\d _'-]*$/u;
    const goalRegex = /^(muscle_gain|fat_loss|strength|recomp)$/;
    const levelRegex = /^(beginner|intermediate)$/;

    const allowedFrequencies = {
    beginner: [2, 3, 4],
    intermediate: [3, 4, 5, 6],
    };

    const frequencyNumber = Number(frequency);

    const isValid =
        nameRegex.test(name?.trim()) &&
        goalRegex.test(goal) &&
        levelRegex.test(level) &&
        Number.isInteger(frequencyNumber) &&
        allowedFrequencies[level]?.includes(frequencyNumber);

    if (!isValid) {
    throw new AppError(
        400,
        "INVALID_PROGRAM_DATA",
        "Invalid name, goal, level, or frequency"
    ); }

    const program = await generateAndSaveProgramForUser({name, goal, level, frequency, userId}); 

    if (!program) throw new AppError(500, "DB_ERROR", "Error generating or saving program"); 

    res.status(201).json({
        success: true,
        data: program,
        message: "Program created successfully",
        meta: {}
    }); 
}; 

const getPrograms = async (req, res) => {
    const userId = req.user.id; 

    const programs = await findAllProgramsForUser(userId);
    
    if(programs.length === 0) return res.status(200).json({
        success: true,
        data: programs,
        message: "You have no programs yet",
        meta: {}
    })

    res.status(200).json({
        success: true,
        data: programs,
        message: "Programs found successfully",
        meta: {}
    }); 

};

const getProgramById = async (req, res) => {
    const { id } = req.params; 
    const numericId = Number(id); 
    const userId = req.user.id; 

    if (isNaN(numericId)) throw new AppError(400, "INVALID_ID", "Invalid id");

    const program = await findProgramByIdForUser( { id: numericId, userId } ); 

    if (!program) throw new AppError(404, "PROGRAM_NOT_FOUND", "Program not found"); 

    res.status(200).json({
        success: true,
        data: program,
        message: "Program found",
        meta: {}
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

    res.status(200).json({
        success: true,
        data: { deletedCount },
        message: "Program deleted successfully",
        meta: {}
    }); 
}; 

const updateProgram = async (req, res) => {
    const userId = req.user.id; 
    const programId = Number(req.params.id); 
    const { name } = req.body; 

    if (isNaN(programId)) throw new AppError(400, "INVALID_ID", "Invalid program id"); 

    const nameRegex = /^(?=.{2,60}$)[\p{L}\p{M}\d][\p{L}\p{M}\d _'-]*$/u;

    const nameValid = nameRegex.test(name?.trim());

    if (!nameValid) throw new AppError(400, "INVALID_PROGRAM_DATA", "Invalid name");

    const updatedProgram = await updateProgramForUser({ programId, userId, data: { name } }); 

    if (!updatedProgram) throw new AppError(404, "PROGRAM_NOT_FOUND", "Program not found"); 

    res.status(200).json({
        success: true,
        data: updatedProgram,
        message: "Program name edited successfully",
        meta: {}
    }); 
}

module.exports = {
    createProgram, 
    getPrograms, 
    getProgramById, 
    deleteProgram, 
    updateProgram
};