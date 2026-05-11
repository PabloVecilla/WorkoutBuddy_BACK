const { Sequelize } = require("sequelize"); // -> import Sequelize class
require("dotenv").config(); // -> loads values from .env to process.env

const sequelize = new Sequelize(  // --> new instance of the Sequelize class
    process.env.DB_NAME,  // -> access data from .env file
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "postgres",  // -> DB system (mysql, sqlite, mariaDB...)
      logging: false,
    }
); // Generates the connection object to access, edit... DB data


module.exports = sequelize; 

