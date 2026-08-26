require("../src/app");
const sequelize = require("../config/database");

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await sequelize.truncate({ cascade: true });
});

afterAll(async () => {
  await sequelize.close();
});
