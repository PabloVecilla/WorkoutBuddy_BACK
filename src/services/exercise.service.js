const { Exercise } = require("../models");  

const findAllExercises = async (filters = {}) => {
    return await Exercise.findAll({ where: filters });
}; 

const findExerciseById = async (id) => {

    return await Exercise.findByPk(id);
}; 

const findExercisesByMovementPattern = async (movementPattern) => {
    return await Exercise.findAll({ where: { movementPattern } }); 
}
  
module.exports = { findAllExercises, findExerciseById, findExercisesByMovementPattern }; 