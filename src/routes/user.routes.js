const express = require("express"); 
const protect = require("../middleware/auth.middleware");

const {
    getAllUsers, 
    getUserByEmail
} = require("../controllers/user.controller"); 

const router = express.Router(); 

router.get("/users", protect, getAllUsers); 

router.get("/users/:mail", protect, getUserByEmail); 

module.exports = router; 