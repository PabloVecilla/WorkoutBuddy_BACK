const { findUserByEmail, createUser, findAllUsers } = require("../services/user.service");

const createTestUser = async (_req, res) => {
    const user = {
        name: "Test User", 
        email: "user@test.com", 
        passwordHash: "123456", 
    }; 
    try {
        const existingUser = await findUserByEmail(user.email);
        if (existingUser) return res.status(409).json({ message: "User already registered"}); 

        const createdUser = await createUser(
          user.name, 
          user.email, 
          user.passwordHash
        ); 
        res.status(201).json({
            message: "User registered successfully", 
            user: {
                id: createdUser.id, 
                name: createdUser.name, 
                email: createdUser.email, 
                createdAt: createdUser.createdAt
            }
        }); 
      } catch (err) {
        res.status(500).json({
          message: "User creation failed", 
          error: err.message, 
        }); 
      }
};

const getAllUsers = async (_req, res) => {
    try {
        const users = await findAllUsers(); 
        if (!users) return res.status(404).json({
            message: "No users found",
        }); 
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
        const email = req.params.mail; 
        const user = await findUserByEmail( email ); 

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