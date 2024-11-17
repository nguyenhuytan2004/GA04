const { DataTypes } = require("sequelize");
const sequelize = require("./configDB");

// Định nghĩa Model Shop
const Shop = sequelize.define(
    "Shop",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: "shop",
        timestamps: false,
    },
);

module.exports = Shop;
