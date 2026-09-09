const path = require("path");
const dotenv = require("dotenv");

const environment = process.env.NODE_ENV || "development";

const envFiles = {
  development: ".env.local",
  test: ".env.test",
  production: ".env"
};

dotenv.config({
  path: path.resolve(process.cwd(), envFiles[environment])
});

const databaseConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "postgres",
  logging: false
};

module.exports = {
  development: databaseConfig,
  test: databaseConfig,
  production: process.env.DATABASE_URL
    ? {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      }
    : databaseConfig
};