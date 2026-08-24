// Import express
const express = require("express"); 

// Import controller functions
const { deleteWorkout, getWorkoutById, getWorkouts, updateWorkout } = require("../controllers/workout.controller"); 

// Import auth middleware::
const protect = require("../middleware/auth.middleware");

// import router 
const router = express.Router(); 

// ROUTES::
router.get("/", protect, getWorkouts)

router.get("/:workoutId", protect, getWorkoutById); 

router.delete("/:workoutId", protect, deleteWorkout); 

router.patch("/:workoutId", protect, updateWorkout); 

// Export routes
module.exports = router; 