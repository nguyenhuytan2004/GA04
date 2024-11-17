const { DataTypes } = require('sequelize');
const sequelize = require('./configDB'); 

// Định nghĩa Model Product
const Product = sequelize.define('Product', {
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
}, {
  tableName: 'products', 
  timestamps: false, 
});

module.exports = Product;
