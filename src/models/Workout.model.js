module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define( 
        "Workout", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }, 
    
            dayNumber: {
                type: DataTypes.INTEGER, 
                allowNull: false
            }, 
    
            focus: {
                type: DataTypes.ENUM(
                    "abs",
                    "arms", 
                    "chest",
                    "full_body", 
                    "legs",
                    "lower",
                    "pull", 
                    "push", 
                    "shoulders", 
                    "upper", 
                ), 
                allowNull: false
            }, 
            // difficulty: {
            //     type: DataTypes.INTEGER,
            //     validate: {
            //         min: 1, 
            //         max: 10
            //     }
            // }
        },
        {
            tableName: "workout",
            timestamps: true,
            underscored: true  // translates camelCase js standard to snake_case SQL standard
        }); 
    return Workout; 
}; 
