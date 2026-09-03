const { Exercise } = require("../models");  

const findAllExercises = async (page, limit) => {
    const offset = (page - 1) * limit;

    return await Exercise.findAndCountAll({ attributes: { exclude: ["raw"] }, limit, offset });
}; 

const findExerciseById = async (id) => {
    return await Exercise.findByPk(id, {attributes: {exclude: ["raw"]}});
}; 

const findExercisesByMovementPattern = async (movementPattern) => {
    return await Exercise.findAll({ where: { movementPattern }, attributes: { exclude: ["raw"] } }); 
}
  
module.exports = { findAllExercises, findExerciseById, findExercisesByMovementPattern }; 