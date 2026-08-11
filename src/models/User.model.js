module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( 
        "User", {
            id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true, 
            },
    
            name: {
                type: DataTypes.STRING, 
                allowNull: false,
            }, 
    
            email: {
                type: DataTypes.STRING, 
                allowNull: false, 
                unique: true, 
            }, 
    
            passwordHash: {
                type: DataTypes.STRING, 
                allowNull: false, 
            }, 
        }, 
        {
            tableName: "users", 
            timestamps: true, 
            underscored: true  // translates camelCase js standard to snake_case SQL standard
        });
        return User;  
};