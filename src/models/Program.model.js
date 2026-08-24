module.exports = (sequelize, DataTypes) => { 
    const Program = sequelize.define( "Program", {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: true
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
        // indexes: [{
        //     unique: true, 
        //     fields: ["user_id", "goal", "level", "frequency"]
        // }],
        tableName: "programs", 
        timestamps: true, 
        underscored: true  // translates camelCase js standard to snake_case SQL standard
    }); 
    return Program; 
}; 
