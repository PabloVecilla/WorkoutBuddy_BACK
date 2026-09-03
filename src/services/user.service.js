const { User } = require("../models");  

const findUserByEmail = async (email) => {
    return User.findOne({where: {  email }, attributes: ["id", "name", "email", "createdAt"]}); 
}; 

const findUserByEmailForUser = async (email) => {
    return User.findOne({where: {  email }}); 
}; 

const createUser = async (name, email, passwordHash) => {
    return User.create({
        name, 
        email, 
        passwordHash
    },
    { returning: ["id", "name", "email", "created_at"] }); 
}; 

const findAllUsers = async () => {
    return User.findAll({ attributes:{ exclude: ["passwordHash"]} }); 
}; 
  
module.exports = { findUserByEmail, findUserByEmailForUser, createUser, findAllUsers }; 