const express = require("express"); 

const {
    createTestUser,
    getAllUsers, 
    getUserByEmail
} = require("../controllers/user.controller"); 

const router = express.Router(); 

router.post("/test-users", createTestUser); 

router.get("/users", getAllUsers); 

router.get("/users/:mail", getUserByEmail); 

module.exports = router; 