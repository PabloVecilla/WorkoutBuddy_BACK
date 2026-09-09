require("../src/app");

const sequelize = require("../config/database");
const seedExercises = require("../scripts/seedExercises"); 
const { apiLimiter, loginLimiter } = require("../src/middleware/rateLimit.middleware");

const resetLimiter = (limiter) => {
  limiter.resetKey("::1");
  limiter.resetKey("127.0.0.1");
  limiter.resetKey("::ffff:127.0.0.1");
};
const modelNames = Object.keys(sequelize.models);

beforeAll(async () => {
  await sequelize.authenticate();

  for (const modelName of modelNames) {
    await sequelize.models[modelName].truncate({ 
      cascade: true, 
      restartIdentity: true
    });
  }

  await seedExercises(); 
});

beforeEach(async () => {
  
    for (const modelName of modelNames) {

      if (modelName === 'Exercise') continue; 
  
      await sequelize.models[modelName].truncate({ 
        cascade: true, 
        restartIdentity: true
      });
    }

    resetLimiter(apiLimiter);
    resetLimiter(loginLimiter);
  });

afterAll(async () => {
  await sequelize.close();
});
