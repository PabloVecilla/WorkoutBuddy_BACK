const bcrypt = require("bcrypt"); 
const User = require("../models/User.model"); 
const jwt = require("jsonwebtoken"); 

// Register
const register = async (req, res) => {
    try {
        const { name, mail, pass } = req.body; 

        if( !name || !mail || !pass) return res.status(400).json({ 
            message: "Please fill all the required fields" }); 

        const existingUser = await User.findOne({where: {  email: mail}}); 

        if (existingUser) return res.status(409).json({ message: "User already registered"}); 

        const passwordHash = await bcrypt.hash(pass, 10); 

        const user = User.create({
            name, 
            email: mail, 
            passwordHash
        }); 

        res.status(201).json({
            message: "User registered successfully", 
            user: {
                id: user.id, 
                name: user.name, 
                email: user.email, 
                createdAt: user.createdAt
            }
        })        

    } catch (err) {
        res.status(500).json({
            message: "Error registering user", 
            error: err.message
        }); 
    }

}; 

// Login::
const login = async (req, res) => {
    try {
        const { mail, pass } = req.body; 

        if (!mail || !pass) return res.status(401).json({message: "Enter email and password"}); 

        const user = await User.findOne({ where: { email: mail } }); 

        if (!user) return res.status(404).json({ message: "User not found" }); 

        const passwordIsValid = await bcrypt.compare(pass, user.passwordHash); 

        if (!passwordIsValid) return res.status(401).json({ message: "Invalid credentials" }); 

        const token = jwt.sign(
            {
                id:user.id,
                email: user.email
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_EXPIRES_IN }
        ); 

        res.cookie("token", token, {
            httpOnly: true, 
            secure: false, 
            sameSite: "lax", 
            maxAge: Number(process.env.COOKIE_MAX_AGE)
        }); 

        res.json({
            message: "Login successful", 
            user: {
                id: user.id, 
                name: user.name, 
                email: user.email
            }
        }); 
    } catch(err) {
        res.status(500).json({
            message: "Error during login",
            error: err.message
        }); 
    }
}; 

const me = async (req, res) => {
    res.json({
        user: req.user
    }); 
}; 

const logout = async (_req, res) => {
    res.clearCookie("token", { // delete token
        httpOnly: true, // ------> for delete, all the options in this json 
        secure: false, // have to be === to the ones we created the token with
        sameSite: "lax", 
    }); 
    res.json({
        message: "logout successfull"
    }); 
}; 

module.exports = { register, login, me, logout }; 