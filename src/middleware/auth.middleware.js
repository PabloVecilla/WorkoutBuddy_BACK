const jwt = require("jsonwebtoken"); 
const { User } = require("../models"); 
const AppError = require("../utils/AppError");

const protect = async (req, res, next) => { 
    try {
        const token = req.cookies.token; 

        if (!token) throw new AppError(401, "UNAUTHORIZED", "Unauthorized"); 

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // jwt.verify -> checks token integrity (no changes to the valid JWT signed); checks if it's expired -- gets info from the token json defined @ auth.controller
                                                                    // Compares token and JWT_SECRET; if successfull, user data from token is stored @ decoded (const); -- if not successfull --> catch
        const user = await User.findByPk(decoded.id, {
            attributes: ["id", "name", "email", "createdAt"]
        }); // attributes [ensures ONLY specified data is stored @ user]

        if (!user) throw new AppError(404, "USER_NOT_FOUND", "User not found"); 

        req.user = user; 

        next(); 

    } catch (err) {
        throw new AppError(401, "TOKEN_ERROR", "Unauthorized"); 
    }
}

module.exports = protect; 