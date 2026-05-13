const { DataTypes } = require("sequelize"); 
const sequelize = require("../../config/database"); // DB connection object import

const Program = sequelize.define(
    "Program", {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true

        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        goal: {
            type: DataTypes.ENUM(
                "muscle_gain", 
                "fat_loss", 
                "strength", 
                "recomp"
            ), 
            allowNull: false
        }, 
        level: {
            type: DataTypes.ENUM(
                "beginner", 
                "intermediate", 
                "pro"
            ), 
            allowNull: false
        }, 
        frequency: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            validate: {
                min: 1, 
                max: 7
            }
        }, 
    },
    {
        tableName: "programs", 
        timestamps: true
    }


); 

module.exports = Program; 