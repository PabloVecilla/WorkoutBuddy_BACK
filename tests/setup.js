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

  const tablesToTruncate = Object.keys(sequelize.models).map( modelName => `"${sequelize.models[modelName].tableName}"`); 

  const sql = `TRUNCATE TABLE ${tablesToTruncate.join(', ')} RESTART IDENTITY CASCADE;`;

  try {
    if (tablesToTruncate.length > 0) {
      await sequelize.query(sql);
    }
  } catch (err) {
    console.error('FAILED SQL:', sql);
    console.error('POSTGRES ERROR:', err.parent || err);
    throw err;
  }

  await seedExercises();
});

beforeEach(async () => {
  // Collect physical table names for all models except Exercise
  const tablesToTruncate = Object.keys(sequelize.models)
    .filter((modelName) => modelName !== 'Exercise')
    .map((modelName) => `"${sequelize.models[modelName].tableName}"`);

  if (tablesToTruncate.length > 0) {
    // Single query execution resolves dependencies atomically
    await sequelize.query(
      `TRUNCATE TABLE ${tablesToTruncate.join(', ')} RESTART IDENTITY CASCADE;`
    );
  }

  resetLimiter(apiLimiter);
  resetLimiter(loginLimiter);
});

afterAll(async () => {
  await sequelize.close();
});
