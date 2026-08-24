module.exports = (sequelize, DataTypes) => {
    const WorkoutExercise = sequelize.define(
        "WorkoutExercise", 
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true
            }, 
            // --- Foreign Keys ---
            workoutId: {
                type: DataTypes.INTEGER,
                allowNull: false, 
            },
            exerciseId: {
                type: DataTypes.INTEGER, 
                allowNull: false
            },
            order: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sets: {
                type: DataTypes.INTEGER, 
                defaultValue: 3
            },
            reps: {
                type: DataTypes.STRING, 
                defaultValue: 10
            }, 
            restSeconds: {
                type: DataTypes.INTEGER, 
                defaultValue: 60
            }
        },
        {
            tableName: "workout_exercises", 
            timestamps: true, 
            underscored: true  // translates camelCase js standard to snake_case SQL standard
        });  
        return WorkoutExercise; 
}; 
