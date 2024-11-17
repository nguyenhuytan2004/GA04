-- Tạo cơ sở dữ liệu mới
#drop database my_store;
CREATE DATABASE IF NOT EXISTS my_store;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE my_store;

-- Tạo bảng products (Danh sách sản phẩm)
CREATE TABLE shop (
    id int AUTO_INCREMENT PRIMARY KEY, 
    product_name VARCHAR(255) NOT NULL, 
    price DECIMAL(10, 2) NOT NULL   
);

-- Thêm dữ liệu mẫu vào bảng products
INSERT INTO shop (product_name, price) VALUES
('Product A', 100.00),
('Product B', 150.50),
('Product C', 200.99),
('Product D', 250.00),
('Product E', 300.00),
('Product F', 350.75);

-- Tạo bảng Product (Chi tiết sản phẩm)
CREATE TABLE Product (
    product_code char(5) PRIMARY KEY,           
    product_name varchar(100) NOT NULL, 
    brand varchar(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT NOT NULL,         
    product_status ENUM('In Stock', 'Out Of Stock') DEFAULT 'In Stock'       
);

-- Thêm dữ liệu mẫu vào bảng Product
INSERT INTO Product VALUES
('12345', 'Preppy T-shirt', 'Adidas', 30.00, 
'This is a premium quality T-shirt perfect for casual wear. Made with high-quality fabric to ensure comfort and durability', 'Out Of Stock');


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_1 VARCHAR(255) NOT NULL
);
INSERT INTO users (email, password) VALUES
('test@gmail.com', '123');