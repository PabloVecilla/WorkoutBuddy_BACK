const { findUserByEmail, findAllUsers } = require("../services/user.service");
const AppError = require("../utils/AppError");

const getAllUsers = async (_req, res) => {

    const users = await findAllUsers(); 
    if (!users || users.length === 0) throw new AppError(404, "USER_NOT_FOUND", "No users found")

    res.status(200).json({
        success: true,
        data: users,
        message: `${users.length} Users found successfully`,
        meta: {}
    }); 
}

const getUserByEmail = async (req, res) => {
    const email = req.params.mail; 
    const user = await findUserByEmail( email ); 

    if (!user) throw new AppError(404, "USER_NOT_FOUND", "User not found")

    res.status(200).json({
        success: true,
        data: {
            user: user.name,
            mail: user.email
        },
        message: "User found successfully",
        meta: {}
    }); 

}

module.exports = {
    getAllUsers, 
    getUserByEmail
}