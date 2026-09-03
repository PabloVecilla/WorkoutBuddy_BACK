const { Exercise } = require("../models");  

const findAllExercises = async (page, limit) => {
    const total = await Exercise.count(); 
    if (!page || !Number.isInteger(page) || page < 1 || page*limit > total ) page = 1; 
    return await Exercise.findAndCountAll({ attributes: { exclude: ["raw"] }, limit, offset: (page-1)*limit });
}; 

const findExerciseById = async (id) => {
    return await Exercise.findByPk(id, {attributes: {exclude: ["raw"]}});
}; 

const findExercisesByMovementPattern = async (movementPattern) => {
    return await Exercise.findAll({ where: { movementPattern }, attributes: { exclude: ["raw"] } }); 
}
  
module.exports = { findAllExercises, findExerciseById, findExercisesByMovementPattern }; 