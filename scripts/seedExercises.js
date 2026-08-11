const fs = require("node:fs/promises"); // uses async/await to manage and write files
const path = require("node:path"); // constructs absolute paths for different OS (/ vs \)

require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") }); // specifies .env environment

const {
  sequelize, Exercise
} = require("../src/models");

const run = async () => {
  try {
    console.log("Connecting to DB...");
    await sequelize.authenticate(); // database connection test
    console.log("DB connection established.")

    // Read normalized JSON file
    const jsonPath = path.join(__dirname, "../data/normalized-exercises.json"); 

    if(!fs.access(jsonPath)) {
        throw new Error(`JSON file not found at: ${jsonPath}`); 
    }

    const rawData = await fs.readFile(jsonPath, "utf-8"); // readFile asyncronous method to read a file, it gets parsed to "utf-8" (if not specified it returns binary).
    const exercisesData = JSON.parse(rawData); // parses plain text to JS json object  
    console.log(`Found ${exercisesData.length} exercises in JSON file`);
    console.log("Starting import..."); 

    await Exercise.destroy({truncate:true, cascade:true}); 

    const seeded = await Exercise.bulkCreate(exercisesData, {validate:true}); 

    console.log(`SUCCESS ${seeded.length} exercises saved to DB!`);
  } catch (error) {
    console.error("Seeding failed:");
    console.error(error);
    process.exitCode = 1; // when the script is automatically ran, the code 1 indicates an error and the CI/CD flags it
  } finally {
    await sequelize.close; 
    console.log("Database connection closed.")
  }
};

run();
