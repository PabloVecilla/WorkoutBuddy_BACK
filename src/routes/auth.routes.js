const express = require("express"); 

const { register, login, me, logout } = require("../controllers/auth.controller"); 
const protect = require("../middleware/auth.middleware"); 

const router = express.Router(); 

router.post("/register", register); 
/* TEST JSON:: {
    "name": "Carlos",
    "mail": "carlos@example.com",
    "pass": "123456"
    } */

router.post("/login", login); 
/* TEST JSON:: {
    "mail": "carlos@example.com",
    "pass": "123456"
    } */

router.get("/me", protect, me); 

router.post("/logout", logout); 

module.exports = router; 


