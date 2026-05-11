const User = require("./User.model"); 
const Program = require("./Program.model");
const Workout = require("./Workout.model");
const Exercise = require("./Exercise.model"); 
const { BelongsTo } = require("sequelize");

// User --> Program
User.hasMany(Program, {
    foreignKey: "userId", 
    onDelete: "CASCADE"
}); 

Program.belongsTo(User, {
    foreignKey: "userId"
}); 

Program.hasMany(Workout, {
    foreignKey: "programId", 
    onDelete: "CASCADE"
}); 

Workout.belongsTo(Program, {
    foreignKey: "programId"
}); 

Workout.hasMany(Exercise, {
    foreignKey: "workoutId",
    onDelete: "CASCADE"
}); 

Exercise.belongsTo(Workout, {
    foreignKey: "workoutId"
}); 

module.exports = { User, Program, Workout, Exercise }




