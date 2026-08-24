// import express
const express = require("express"); 

// import controller functions 
const { getExercises, getExerciseById } = require("../controllers/exercise.controller"); 

// import auth middleware::
const protect = require("../middleware/auth.middleware"); 

// import router
const router = express.Router(); 

// ROUTES::
router.get("/", protect, getExercises); 

router.get("/:id", protect, getExerciseById); 


// Export routes
module.exports = router; 
