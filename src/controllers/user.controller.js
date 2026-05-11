const User = require("../models/User.model"); 

const createTestUser = async (req, res) => {
    try {
        const user = await User.create({
          name: "Test User", 
          email: "user@test.com", 
          passwordHash: "123456", 
        })
        res.status(201).json(user); 
      } catch (err) {
        res.status(500).json({
          message: "User creation failed", 
          error: err.message, 
        }); 
      }
}

const getAllUsers = async (_req, res) => {
    try {
        const users = await User.findAll(); 
        if (!users) return res.status(404).json({
            message: "No users found",
        })
        res.status(200).json(users); 
    } catch (err) {
        res.status(500).json({
            message: "Error geting users",
            error: err.message
        })
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const mail = req.params.mail; 
        const user = await User.findOne({where: { email: mail }}); 

        if (!user) return res.status(404).json({message: "User not found"}); 

        res.status(200).json({
            user: user.name,
            mail: user.email
        })

    } catch (err) {
        res.status(500).json({
            message: "Error finding user", 
            error: err.message
        })
    }
}

module.exports = {
    createTestUser,
    getAllUsers, 
    getUserByEmail
}