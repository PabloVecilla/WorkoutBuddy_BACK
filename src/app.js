const express = require("express"); 
const cookieParser = require("cookie-parser"); 
// const cors = require("cors"); 

// IMPORT DOTENV
require("dotenv").config({
  path:
    process.env.NODE_ENV === "production" ? ".env" : ".env.local" 
}); 


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

// CORS
const cors = require("cors"); 

// IMPORT_MODELS
require("./models"); 

const app = express(); 

app.use(cors ({ // use cors to define access route from frontend
  origin: process.env.FRONTEND_URL, // frontend req origin  
  credentials: true // http-only cookies require credentials
})); 
app.use(express.json()); // Parseamos a JSON para que sea un objeto legible por JS
app.use(express.urlencoded({extended: false})) //parseamos el formulario desde XML
app.use(cookieParser()) //cookie

app.use("/", userRoutes); 

app.use("/auth", authRoutes); 

app.use("/programs", programRoutes); 

app.use("/programs/:programId/workouts", workoutRoutes); 

app.use("/exercises", exerciseRoutes); 

app.get("/", (_req, res) => {
  res.json({ message: "WorkoutBuddy API running on local" });
});

module.exports = app; 