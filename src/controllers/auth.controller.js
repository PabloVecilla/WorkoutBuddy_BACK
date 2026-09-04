const bcrypt = require("bcrypt"); // hasher
const jwt = require("jsonwebtoken"); 
// Import service query functions
const { findUserByEmail, findUserByEmailForUser, createUser } = require("../services/user.service");
const AppError = require("../utils/AppError"); 

// User serializer
const serializeUser = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
}); 

// Register
const register = async (req, res) => {
    const { name, email, password } = req.body; 

    if( !name || !email || !password) throw new AppError(400, "MISSING_FIELDS", "Please fill all the required fields"); 

    const existingUser = await findUserByEmail(email);

    if (existingUser) throw new AppError(409, "USER_REGISTERED", "User already registered"); 

    const passwordHash = await bcrypt.hash(password, 10); 

    const user = await createUser(name, email, passwordHash); 

    res.status(201).json({
        success: true,
        data: serializeUser(user),
        message: "User registered successfully",
        meta: {}
    })        

}; 

// Login::
const login = async (req, res) => {
    const { email, password } = req.body; 

    if (!email || !password) throw new AppError(400, "MISSING_FIELDS", "Enter email and password")

    const user = await findUserByEmailForUser(email); 

    if (!user) throw new AppError(401, "INVALID_CREDENTIALS", "Invalid credentials"); 

    const passwordIsValid = await bcrypt.compare(password, user.passwordHash); 

    if (!passwordIsValid) throw new AppError(401, "INVALID_CREDENTIALS", "Invalid credentials"); 

    const token = jwt.sign(
        {
            id:user.id,
            email: user.email
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN }
    ); 

    res.cookie("token", token, { // modifies the response headers; 
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production", 
        sameSite: process.env.NODE_ENV === "test" ? false : (process.env.NODE_ENV === "production" ? "none" : "lax"), 
        maxAge: Number(process.env.COOKIE_MAX_AGE)
    }); 

    res.status(200).json({ // sends final response  with modified headers  
        success: true,
        data: serializeUser(user),
        message: "Login successful",
        meta: {}
    }); 
}; 

const me = async (req, res) => {
    res.status(200).json({
        success: true,
        data: req.user,
        message: "User returned successfully",
        meta: {}
    }); 
}; 

const logout = async (_req, res) => {
    res.clearCookie("token", { // delete token
        httpOnly: true, // ------> for delete, all the options in this json 
        secure: process.env.NODE_ENV === "production", // have to be === to the ones we created the token with
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
    }); 
    res.status(200).json({
        success: true,
        data: [],
        message: "Logout successfull",
        meta: {}
    }); 
}; 

module.exports = { register, login, me, logout }; 