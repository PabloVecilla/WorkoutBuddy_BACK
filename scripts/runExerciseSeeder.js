const seedExercises = require("./seedExercises");
const sequelize = require("../config/database"); 

const run = async () => {
    try {
      await seedExercises();
      console.log("Exercises seeded");
    } catch (err) {
      console.error("Seeding failed:", err);
      process.exitCode = 1;
    } finally {
      await sequelize.close();
    }
  };
  
  run();