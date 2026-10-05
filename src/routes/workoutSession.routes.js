// Import express
const express = require("express"); 

// Import controller functions
const { createWorkoutSession, finishWorkoutSession, getWorkoutSession } = require("../controllers/workoutSession.controller"); 

// Import auth middleware::
const protect = require("../middleware/auth.middleware");

// import router 
const router = express.Router({ mergeParams: true }); // grants access to parent router's params

// ROUTES::
router.post("/programs/:programId/workouts/:workoutId/sessions", protect, createWorkoutSession); 

router.get("/workout-sessions/:sessionId", protect, getWorkoutSession); 

router.patch("/workout-sessions/:sessionId/finish", protect, finishWorkoutSession); 

// Export routes
module.exports = router; 