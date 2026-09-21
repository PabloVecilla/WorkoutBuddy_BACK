module.exports = (sequelize, DataTypes) => {
    const WorkoutSet = sequelize.define(
        "WorkoutSet", 
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true
            }, 
            // --- Foreign Keys ---
            workoutSessionId: {
                type: DataTypes.INTEGER,
                allowNull: false, 
            },
            workoutExerciseId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            exerciseId: {
                type: DataTypes.INTEGER, 
                allowNull: false
            },
            setNumber: {
                type: DataTypes.INTEGER,
                allowNull: true, 
                validate: {
                    min: 1, 
                    max: 10
                }
            },
            targetReps: {
                type: DataTypes.STRING,
                allowNull: true
            },
            executedReps: {
                type: DataTypes.INTEGER, 
                allowNull: true
            }, 
            weightKg: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: true, 
                validate: { min: 0 }
            }, 
            isCompleted: {
                type: DataTypes.BOOLEAN, 
                defaultValue: false
            }
        },
        {
            tableName: "workout_sets", 
            timestamps: true, // createdAt, updatedAt
            underscored: true,  // translates camelCase js standard to snake_case SQL standard
            indexes: [
                { fields: ['workout_session_id'] },
                { fields: ['workout_exercise_id'] }
            ]
        });
        return WorkoutSet;
};
