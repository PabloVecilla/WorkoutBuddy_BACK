const { Sequelize } = require("sequelize");
require("dotenv").config();

const productionConfig = {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const developmentConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  logging: false,
};

const sequelize =
  process.env.NODE_ENV === "production" && process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, productionConfig)
    : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        developmentConfig
      );

module.exports = sequelize; 

