const { Sequelize } = require('sequelize');

// Kết nối đến MySQL
const sequelize = new Sequelize('my_store', 'root', '3333', { // database , usename, password 
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Kiểm tra kết nối
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối tới cơ sở dữ liệu thành công');
  } catch (error) {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
  }
};

testConnection();

module.exports = sequelize; // Xuất đối tượng sequelize
