const sequelize = require("../../config/database"); 
const { DataTypes } = require("sequelize"); 
const User = require("./User.model")(sequelize, DataTypes); 
const Program = require("./Program.model")(sequelize, DataTypes);
const Workout = require("./Workout.model")(sequelize, DataTypes);
const Exercise = require("./Exercise.model")(sequelize, DataTypes); 
const WorkoutExercise = require("./WorkoutExercise.model")(sequelize, DataTypes); 

// User --> Program
User.hasMany(Program, {
    foreignKey: "userId", 
    onDelete: "CASCADE"
}); 

Program.belongsTo(User, {
    foreignKey: "userId"
}); 

// Program --> Workout

Program.hasMany(Workout, {
    foreignKey: "programId", 
    onDelete: "CASCADE"
}); 

Workout.belongsTo(Program, {
    foreignKey: "programId"
}); 

// Workout --> Exercise

Workout.hasMany(WorkoutExercise, {
    foreignKey: "workoutId",
    as: "workoutExercises",
    onDelete: "CASCADE"
}); 

WorkoutExercise.belongsTo(Workout, {
    foreignKey: "workoutId", 
    as: "workout"
}); 

// Exercise --> WorkoutExercise
Exercise.hasMany(WorkoutExercise, {  // helps sequelize query WorkoutExercise to search from a given Exercise
    foreignKey: "exerciseId",
    as: "workoutExercises" 
});
WorkoutExercise.belongsTo(Exercise, { // helps sequelize find a Exercise from the exerciseid stored in WorkoutExercise
    foreignKey: "exerciseId", 
    as: "exercise",
    onDelete: "RESTRICT" 
});

module.exports = { sequelize, User, Program, Workout, Exercise, WorkoutExercise }; 




