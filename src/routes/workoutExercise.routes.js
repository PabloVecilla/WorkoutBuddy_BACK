// Import express
const express = require("express"); 

// Import controller functions
const { updateWorkoutExercise, deleteWorkoutExercise } = require("../controllers/workoutExercise.controller"); 

// Import auth middleware::
const protect = require("../middleware/auth.middleware");

// import router 
const router = express.Router(); 

// ROUTES::
router.patch("/:id", protect, updateWorkoutExercise); 

router.delete("/:id", protect, deleteWorkoutExercise); 

// Export routes
module.exports = router; 
