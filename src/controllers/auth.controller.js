const bcrypt = require("bcrypt"); // hasher
const jwt = require("jsonwebtoken"); 
// Import service query functions
const { findUserByEmail, createUser } = require("../services/user.service");

// Register
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body; 

        if( !name || !email || !password) return res.status(400).json({ 
            message: "Please fill all the required fields" }); 

        const existingUser = await findUserByEmail(email);

        if (existingUser) return res.status(409).json({ message: "User already registered"}); 

        const passwordHash = await bcrypt.hash(password, 10); 

        const user = await createUser(name, email, passwordHash); 

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
        const { email, password } = req.body; 

        if (!email || !password) return res.status(401).json({message: "Enter email and password"}); 

        const user = await findUserByEmail(email); 

        if (!user) return res.status(404).json({ message: "User not found" }); 

        const passwordIsValid = await bcrypt.compare(password, user.passwordHash); 

        if (!passwordIsValid) return res.status(401).json({ message: "Invalid credentials" }); 

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
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
            maxAge: Number(process.env.COOKIE_MAX_AGE)
        }); 

        res.status(200).json({ // sends final response  with modified headers  
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
        secure: process.env.NODE_ENV === "production", // have to be === to the ones we created the token with
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
    }); 
    res.json({
        message: "logout successfull"
    }); 
}; 

module.exports = { register, login, me, logout }; 