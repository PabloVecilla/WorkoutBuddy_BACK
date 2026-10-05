// Import express
const express = require("express"); 

// Import controller functions
const { updateWorkoutSet } = require("../controllers/workoutSet.controller"); 

// Import auth middleware::
const protect = require("../middleware/auth.middleware");

// import router 
const router = express.Router({ mergeParams: true }); // grants access to parent router's params

// ROUTES::
router.patch("/:setId", protect, updateWorkoutSet); 

// Export routes
module.exports = router; 