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
  
module.exports = { findUserByEmail, createUser }; 