const { findUserByEmail, findAllUsers } = require("../services/user.service");
const AppError = require("../utils/AppError");

const getAllUsers = async (_req, res) => {

    const users = await findAllUsers(); 
    if (!users) throw new AppError(404, "USER_NOT_FOUND", "No users found")

    res.status(200).json(users); 
}

const getUserByEmail = async (req, res) => {
    const email = req.params.mail; 
    const user = await findUserByEmail( email ); 

    if (!user) throw new AppError(404, "USER_NOT_FOUND", "User not found")

    res.status(200).json({
        user: user.name,
        mail: user.email
    })

}

module.exports = {
    getAllUsers, 
    getUserByEmail
}