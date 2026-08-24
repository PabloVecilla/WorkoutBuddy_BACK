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

    const cardio = await Exercise.bulkCreate([
      {
        "externalId": "cardio1",
        "source": "cardioExercises",
        "name": "Incline Treadmill Walk",
        "muscle": "cardio",
        "secondaryMuscle": null,
        "movementPattern": "cardio",
        "equipment": "Treadmill",
        "complexity": "beginner",
        "imageUrl": "no image",
        "instructions": "Set the treadmill to a high incline (8-15%) and a moderate walking speed. Maintain an upright posture and walk without holding onto the handrails.",
        "raw": {
          "id": "004778a4-44ab-4a7d-a2f2-d5edf5aa4f7e",
          "code": "INCLINE_TREADMILL_WALK",
          "primaryMuscles": [
            {
              "id": "df09fafa-7110-498d-96c9-7e40ba17c9e3",
              "code": "CARDIO",
              "color": "#4CC9F0",
              "name": "Cardio"
            }
          ],
          "secondaryMuscles": [],
          "types": [
            {
              "id": "4e2b2069-a86b-4892-85ec-9cee87fa3572",
              "code": "CARDIO",
              "name": "Cardio"
            }
          ],
          "categories": [
            {
              "id": "da690f2c-a16f-496d-94e5-cf27832f8dc2",
              "code": "MACHINE",
              "name": "Machine"
            }
          ],
          "name": "Incline Treadmill Walk",
          "description": "Set the treadmill to a high incline and walk at a moderate pace to elevate heart rate with low impact."
        }
      },
      {
        "externalId": "cardio2",
        "source": "cardioExercises",
        "name": "Stationary Bike",
        "muscle": "cardio",
        "secondaryMuscle": null,
        "movementPattern": "cardio",
        "equipment": "Stationary Bike",
        "complexity": "beginner",
        "imageUrl": "no image",
        "instructions": "Adjust the seat height properly, keep a steady cadence, and maintain moderate resistance throughout.",
        "raw": {
          "id": "115889b5-55bc-5b8e-b303-e6fee6bb5g8f",
          "code": "STATIONARY_BIKE",
          "primaryMuscles": [
            {
              "id": "df09fafa-7110-498d-96c9-7e40ba17c9e3",
              "code": "CARDIO",
              "color": "#4CC9F0",
              "name": "Cardio"
            }
          ],
          "secondaryMuscles": [],
          "types": [
            {
              "id": "4e2b2069-a86b-4892-85ec-9cee87fa3572",
              "code": "CARDIO",
              "name": "Cardio"
            }
          ],
          "categories": [
            {
              "id": "da690f2c-a16f-496d-94e5-cf27832f8dc2",
              "code": "MACHINE",
              "name": "Machine"
            }
          ],
          "name": "Stationary Bike",
          "description": "Pedal at a consistent speed on a stationary bicycle to build endurance and burn calories."
        }
      },
      {
        "externalId": "cardio3",
        "source": "cardioExercises",
        "name": "Rowing Machine",
        "muscle": "cardio",
        "secondaryMuscle": null,
        "movementPattern": "cardio",
        "equipment": "Rowing Machine",
        "complexity": "intermediate",
        "imageUrl": "no image",
        "instructions": "Drive with your legs, lean back slightly, and pull the handle toward your lower chest in a fluid motion.",
        "raw": {
          "id": "226990c6-66cd-6c9f-c414-f7gff7cc6h90",
          "code": "ROWING_MACHINE",
          "primaryMuscles": [
            {
              "id": "df09fafa-7110-498d-96c9-7e40ba17c9e3",
              "code": "CARDIO",
              "color": "#4CC9F0",
              "name": "Cardio"
            }
          ],
          "secondaryMuscles": [],
          "types": [
            {
              "id": "4e2b2069-a86b-4892-85ec-9cee87fa3572",
              "code": "CARDIO",
              "name": "Cardio"
            }
          ],
          "categories": [
            {
              "id": "da690f2c-a16f-496d-94e5-cf27832f8dc2",
              "code": "MACHINE",
              "name": "Machine"
            }
          ],
          "name": "Rowing Machine",
          "description": "A full-body cardio workout utilizing the ergometer rower focusing on legs, core, and arms."
        }
      },
      {
        "externalId": "cardio4",
        "source": "cardioExercises",
        "name": "Jump Rope",
        "muscle": "cardio",
        "secondaryMuscle": null,
        "movementPattern": "cardio",
        "equipment": "Bodyweight",
        "complexity": "intermediate",
        "imageUrl": "no image",
        "instructions": "Keep elbows close to your sides, jump on the balls of your feet, and rotate the rope using your wrists.",
        "raw": {
          "id": "337001d7-77de-7d0a-d525-g8hgg8dd7i01",
          "code": "JUMP_ROPE",
          "primaryMuscles": [
            {
              "id": "df09fafa-7110-498d-96c9-7e40ba17c9e3",
              "code": "CARDIO",
              "color": "#4CC9F0",
              "name": "Cardio"
            }
          ],
          "secondaryMuscles": [],
          "types": [
            {
              "id": "4e2b2069-a86b-4892-85ec-9cee87fa3572",
              "code": "CARDIO",
              "name": "Cardio"
            }
          ],
          "categories": [
            {
              "id": "da690f2c-a16f-496d-94e5-cf27832f8dc2",
              "code": "BODYWEIGHT",
              "name": "Bodyweight"
            }
          ],
          "name": "Jump Rope",
          "description": "High-intensity skipping exercise that improves coordination, agility, and cardiovascular fitness."
        }
      },
      {
        "externalId": "cardio5",
        "source": "cardioExercises",
        "name": "Stair Master",
        "muscle": "cardio",
        "secondaryMuscle": null,
        "movementPattern": "cardio",
        "equipment": "Bodyweight",
        "complexity": "intermediate",
        "imageUrl": "no image",
        "instructions": "Step rhythmically up the rotating stairs, keeping an upright torso and minimal reliance on handrail support.",
        "raw": {
          "id": "448112e8-88ef-8e1b-e636-h9ihh9ee8j12",
          "code": "STAIR_MASTER",
          "primaryMuscles": [
            {
              "id": "df09fafa-7110-498d-96c9-7e40ba17c9e3",
              "code": "CARDIO",
              "color": "#4CC9F0",
              "name": "Cardio"
            }
          ],
          "secondaryMuscles": [],
          "types": [
            {
              "id": "4e2b2069-a86b-4892-85ec-9cee87fa3572",
              "code": "CARDIO",
              "name": "Cardio"
            }
          ],
          "categories": [
            {
              "id": "da690f2c-a16f-496d-94e5-cf27832f8dc2",
              "code": "MACHINE",
              "name": "Machine"
            }
          ],
          "name": "Stair Master",
          "description": "Continuous stair climbing machine exercise designed to challenge leg strength and cardiovascular stamina."
        }
      }
    ])

    console.log(`SUCCESS ${seeded.length} general exercises and ${cardio.length} cardio exercises saved to DB!`);
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
