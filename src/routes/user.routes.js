const express = require("express"); 

const {
    getAllUsers, 
    getUserByEmail
} = require("../controllers/user.controller"); 

const router = express.Router(); 

router.get("/users", getAllUsers); 

router.get("/users/:mail", getUserByEmail); 

module.exports = router; 