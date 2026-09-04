const express = require("express"); 
const cookieParser = require("cookie-parser"); 
// const cors = require("cors"); 

// IMPORT DOTENV
require("dotenv").config({
  path:
    process.env.NODE_ENV === "production" ? ".env" 
    : process.env.NODE_ENV === "test" ? ".env.test" 
    : ".env.local" 
}); 

// Import Helmet
const helmet = require("helmet"); 

// ROUTES
// _users
const userRoutes = require("../src/routes/user.routes"); 
// _auth
const authRoutes = require("../src/routes/auth.routes"); 
// _program
const programRoutes = require("../src/routes/program.routes"); 
// _workout
const workoutRoutes = require("../src/routes/workout.routes"); 
// _exercise
const exerciseRoutes = require("../src/routes/exercise.routes"); 
// _workoutExercise
const workoutExerciseRoutes = require("../src/routes/workoutExercise.routes"); 

// IMPORT NOT FOUND handler
const notFound = require("../src/middleware/notFound.middleware"); 

// IMPORT ERROR handler
const errorHandler = require("../src/middleware/error.middleware"); 

// CORS
const cors = require("cors"); 

// IMPORT_MODELS
require("./models"); 

// Import api rateLimiter
const { apiLimiter } = require("../src/middleware/rateLimit.middleware"); 

// CREATE express engine
const app = express();

// Mandatory for express-rate-limit to function properly  
app.set('trust proxy', 1); 

// Helmet protection
app.use(helmet()); 

app.use(cors ({ // use cors to define access route from frontend
  origin: process.env.FRONTEND_URL, // frontend req origin  
  credentials: true // http-only cookies require credentials
})); 
app.use(express.json()); // Parseamos a JSON para que sea un objeto legible por JS
app.use(express.urlencoded({extended: false})) //parseamos el formulario desde XML
app.use(cookieParser()) //cookie

app.use(apiLimiter); 

app.use("/", userRoutes); 

app.use("/auth", authRoutes); 

app.use("/programs", programRoutes); 

app.use("/programs/:programId/workouts", workoutRoutes); 

app.use("/exercises", exerciseRoutes); 

app.use("/programs/:programId/workouts/:workoutId/workout-exercises", workoutExerciseRoutes); 

app.get("/", (_req, res) => {
  res.json({ 
    success: true,
    data: [],
    message: "WorkoutBuddy API running on port" + process.env.PORT,
    meta: {}
  });
});

// not found AFTER routes to be usable by all
app.use(notFound); 
//  error handler AFTER routes to be usable by all && AFTER 404
app.use(errorHandler); 

module.exports = app; 