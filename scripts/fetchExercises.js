// IMPORT DOTENV
require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
});

const fs = require("node:fs/promises"); // uses async/await to manage and write files
const path = require("node:path"); // constructs absolute paths for different OS (/ vs \)

const {
  fetchWorkoutApiExercises,
} = require("../src/services/workoutAPI.service");

const outputPath = path.join(__dirname, "../data/raw-exercises.json"); // the path where the json will live

const run = async () => {
  try {
    console.log("Requesting exercises from WorkoutAPI...");

    const responseData = await fetchWorkoutApiExercises(); // calls fetch function

    console.log("Response received.");

    await fs.mkdir(path.dirname(outputPath), { // creates the folder for the json file
      recursive: true, // if the folder doesn't exists, create it to avoid "not susch folder" error
    });

    await fs.writeFile( // writes the api response into the json file at data/raw-exercises
      outputPath,
      JSON.stringify(responseData, null, 2),
      "utf8"
    );

    console.log(`Raw response saved to: ${outputPath}`);
  } catch (error) {
    console.error("Could not fetch exercises:");
    console.error(error);
    process.exitCode = 1; // when the script is automatically ran, the code 1 indicates an error and the CI/CD flags it
  }
};

run();
