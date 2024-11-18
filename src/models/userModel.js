
const { DataTypes } = require('sequelize');
const sequelize = require('./configDB');  

// Định nghĩa mô hình User
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: false,  // Nếu bạn không sử dụng timestamps trong bảng
});

module.exports = User;  
