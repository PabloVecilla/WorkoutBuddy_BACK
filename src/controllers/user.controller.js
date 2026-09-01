const { findUserByEmail, findAllUsers } = require("../services/user.service");

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
    getAllUsers, 
    getUserByEmail
}