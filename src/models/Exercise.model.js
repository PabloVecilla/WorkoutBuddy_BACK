module.exports = (sequelize, DataTypes) => {
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
            name: {
                type: DataTypes.STRING, 
                allowNull: false
            },  
            muscle: {
                type: DataTypes.STRING, 
                allowNull: true
            }, 
            secondaryMuscle: {
                type: DataTypes.STRING, 
                allowNull: true
            },
            movementPattern: {
                type: DataTypes.STRING, 
                allowNull: false
            },
            equipment: {
                type: DataTypes.STRING, 
                allowNull: true
            },
            complexity: {
                type: DataTypes.STRING, 
                allowNull: true
            },
            imageUrl: {
                type: DataTypes.STRING, 
                allowNull: true
            },
            instructions: {
                type: DataTypes.TEXT, 
                allowNull: true
            }, 
            raw: {
                type: DataTypes.JSON,
                allowNull: true
            }
        },
        {
            tableName: "exercises", 
            timestamps: true, 
            underscored: true  // translates camelCase js standard to snake_case SQL standard
        }); 
        return Exercise; 

}; 