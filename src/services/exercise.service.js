const { Exercise } = require("../models");  

const findAllExercises = async (page, limit) => {
    const total = await Exercise.count(); 
    if (!page || page === 0 || page*10 > total) page = 1; 
    return await Exercise.findAndCountAll({ attributes: { exclude: ["raw"] }, limit, offset: (page-1)*limit });
}; 

const findExerciseById = async (id) => {
    return await Exercise.findByPk(id);
}; 

const findExercisesByMovementPattern = async (movementPattern) => {
    return await Exercise.findAll({ where: { movementPattern } }); 
}
  
module.exports = { findAllExercises, findExerciseById, findExercisesByMovementPattern }; 