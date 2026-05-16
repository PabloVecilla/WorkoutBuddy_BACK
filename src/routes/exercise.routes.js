// import express
const express = require("express"); 

// import controller functions 
const { updateExercise, deleteExercise, getExercises, getExerciseById } = require("../controllers/exercise.controller"); 

// import auth middleware::
const protect = require("../middleware/auth.middleware"); 

// import router
const router = express.Router(); 

router.patch("/:id", protect, updateExercise); 

router.delete("/:id", protect, deleteExercise); 

router.get("/", protect, getExercises); 

router.get("/:id", protect, getExerciseById); 



module.exports = router; 
