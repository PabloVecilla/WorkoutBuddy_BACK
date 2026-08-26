require("../src/app");
const sequelize = require("../config/database");
const seedExercises = require("../scripts/seedExercises"); 

beforeAll(async () => {
  await sequelize.authenticate();

  await sequelize.sync({ force:true }); 

  await seedExercises(); 
});

beforeEach(async () => {
    const modelNames = Object.keys(sequelize.models);
  
    for (const modelName of modelNames) {

      if (modelName === 'Exercise') continue; 
  
      await sequelize.models[modelName].truncate({ 
        cascade: true, 
        restartIdentity: true
      });
    }
  });

afterAll(async () => {
  await sequelize.close();
});
