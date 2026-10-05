module.exports = (sequelize, DataTypes) => {
    const WorkoutSession = sequelize.define(
        "WorkoutSession", 
        {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true
            }, 
            // --- Foreign Keys ---
            userId: {
                type: DataTypes.INTEGER, 
                allowNull: false
            },
            workoutId: {
                type: DataTypes.INTEGER,
                allowNull: false, 
            },
            isInProgress: {
                type: DataTypes.BOOLEAN,
                allowNull: false, 
                defaultValue: true
            },
            startedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            completedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            tableName: "workout_sessions", 
            timestamps: true, // createdAt, updatedAt
            underscored: true,  // translates camelCase js standard to snake_case SQL standard
            indexes: [
                { fields: ['user_id'] },
                { fields: ['workout_id'] }
            ]
        });  
        return WorkoutSession; 
}; 
