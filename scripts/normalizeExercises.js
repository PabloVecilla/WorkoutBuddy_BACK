// IMPORT DOTENV
require("dotenv").config({
    path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
  });
  
  const fs = require("node:fs/promises"); // uses async/await to manage and write files
  const path = require("node:path"); // constructs absolute paths for different OS (/ vs \)
  
  const {
    normalizeWorkoutApiExercise,
  } = require("../src/services/workoutAPI.service");

  
  const outputPath = path.join(__dirname, "../data/normalized-exercises.json"); // the path where the json will live
  
  const run = async () => {
    try {
      console.log("Normalizing exercises from WorkoutAPI...");
        
      const rawExercises = require("../data/raw-exercises.json"); 
  
      console.log("Raw exercises found.");
  
      await fs.mkdir(path.dirname(outputPath), { // creates the folder for the json file
        recursive: true, // if the folder doesn't exists, create it to avoid "not susch folder" error
      });

      const normalizedData = rawExercises.map(normalizeWorkoutApiExercise); 
  
      await fs.writeFile( // writes the normalized exercises into the json file at data/normalized-exercises
        outputPath,
        JSON.stringify(normalizedData, null, 2),
        "utf8"
      );
  
      console.log(`Normalized exercises saved to: ${outputPath}`);
    } catch (error) {
      console.error("Could not find raw exercises:");
      console.error(error);
      process.exitCode = 1; // when the script is automatically ran, the code 1 indicates an error and the CI/CD flags it
    }
  };
  
  run();
  