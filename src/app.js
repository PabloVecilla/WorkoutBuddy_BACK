const express = require("express"); 
const cookieParser = require("cookie-parser"); 
// const cors = require("cors"); 
const sequelize = require("../config/database"); 

// ROUTES
// _users
const userRoutes = require("../src/routes/user.routes"); 
// _auth
const authRoutes = require("../src/routes/auth.routes"); 
// _program
const programRoutes = require("../src/routes/program.routes"); 
// _exercise
const exerciseRoutes = require("../src/routes/exercise.routes"); 

// IMPORT_MODELS
require("./models"); 
// IMPORT DOTENV
require("dotenv").config(); 

const app = express(); 

const PORT = process.env.PORT || 3000; 

app.use(express.json()); // Parseamos a JSON para que sea un objeto legible por JS
app.use(express.urlencoded({extended: false})) //parseamos el formulario desde XML
app.use(cookieParser()) //cookie

app.use("/", userRoutes); 

app.use("/auth", authRoutes); 

app.use("/programs", programRoutes); 

app.use("/exercises", exerciseRoutes); 

app.get("/", (_req, res) => {
  res.json({ message: "WorkoutBuddy API running on local" });
});

async function startServer() { // -> only accept http requests if connection is successful
  try {
    await sequelize.authenticate(); // -> test connection to DB
    console.log("Database Connected"); 

    await sequelize.sync({alter:true}); // -> updates DB to match the sequelize model --> ONLY for development. 
    console.log("Models synced"); 

    app.listen(PORT, () => {
      console.log(`API listening on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("Database connection failed: ", err); 
  }
}
startServer(); 