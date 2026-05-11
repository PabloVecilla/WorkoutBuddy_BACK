const jwt = require("jsonwebtoken"); 
const User = require("../models/User.model"); 

const protect = async (req, res, next) => { 
    try {
        const token = req.cookies.token; 

        if (!token) return res.status(401).json({ message: "Unauthorized" }); 

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // jwt.verify -> checks token integrity (no changes to the valid JWT signed); checks if it's expired -- gets info from the token json defined @ auth.controller
                                                                    // Compares token and JWT_SECRET; if successfull, user data from token is stored @ decoded (const); -- if not successfull --> catch
        const user = await User.findByPk(decoded.id, {
            attributes: ["id", "name", "email", "createdAt"]
        }); // attributes [ensures ONLY specified data is stored @ user]

        if (!user) return res.status(404).json({
            message: "User not found"
        }); 

        req.user = user; 

        next(); 

    } catch (err) {
        res.status(500).json({
            message: "Error validating token", 
            error: err.mesage
        })
    }
}

module.exports = protect; 