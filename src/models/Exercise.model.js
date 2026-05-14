const { DataTypes } = require("sequelize"); 
const sequelize = require("../../config/database"); 

const Exercise = sequelize.define(
    "Exercise", 
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        externalId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        source: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        category: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        muscle: {
            type: DataTypes.STRING, 
            allowNull: true
        }, 
        equipment: {
            type: DataTypes.STRING, 
        },
        sets: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        reps: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        restSeconds: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "exercises", 
        timestamps: true
    }
); 

module.exports = Exercise; 