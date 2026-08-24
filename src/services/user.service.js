const { User } = require("../models");  

const findUserByEmail = async (email) => {
    return User.findOne({where: {  email }}); 
}; 

const createUser = async (name, email, passwordHash) => {
    return User.create({
        name, 
        email, 
        passwordHash
    }); 
}; 

const findAllUsers = async () => {
    return User.findAll({ attributes:{ exclude: ["passwordHash"]} }); 
}; 
  
module.exports = { findUserByEmail, createUser, findAllUsers }; 