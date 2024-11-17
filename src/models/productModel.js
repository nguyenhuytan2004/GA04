const { DataTypes } = require("sequelize");
const sequelize = require("./configDB");

const Product = sequelize.define(
    "Product",
    {
        product_code: {
            type: DataTypes.STRING(5),
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        product_status: {
            type: DataTypes.ENUM("In Stock", "Out Of Stock"),
            defaultValue: "In Stock",
        },
    },
    {
        tableName: "product", // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Bỏ qua cột createdAt và updatedAt
    },
);

module.exports = Product;
