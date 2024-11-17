-- Tạo cơ sở dữ liệu mới
CREATE DATABASE IF NOT EXISTS my_store;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE my_store;

-- Tạo bảng sản phẩm
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Khóa chính tự động tăng
    product_name VARCHAR(255) NOT NULL, -- Tên sản phẩm
    price DECIMAL(10, 2) NOT NULL       -- Giá sản phẩm
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (email, password) VALUES
('test@gmail.com', '123');

-- Chèn 6 dữ liệu mẫu vào bảng
INSERT INTO products (product_name, price) VALUES
('Product A', 100.00),
('Product B', 150.50),
('Product C', 200.99),
('Product D', 250.00),
('Product E', 300.00),
('Product F', 350.75);

-- Kiểm tra dữ liệu
-- SELECT * FROM users;
