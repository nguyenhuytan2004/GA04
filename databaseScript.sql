-- Tạo cơ sở dữ liệu mới
CREATE DATABASE IF NOT EXISTS my_store;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE my_store;

-- Tạo bảng products (Danh sách sản phẩm)
CREATE TABLE products (
    id int AUTO_INCREMENT PRIMARY KEY,  -- Khóa chính tự động tăng
    product_name VARCHAR(255) NOT NULL, -- Tên sản phẩm
    price DECIMAL(10, 2) NOT NULL       -- Giá sản phẩm
);

-- Thêm dữ liệu mẫu vào bảng products
INSERT INTO products (product_name, price) VALUES
('Product A', 100.00),
('Product B', 150.50),
('Product C', 200.99),
('Product D', 250.00),
('Product E', 300.00),
('Product F', 350.75);

-- Tạo bảng Product (Chi tiết sản phẩm)
CREATE TABLE Product (
    product_id INT PRIMARY KEY,             -- Khóa chính liên kết với bảng products
    description TEXT,                       -- Mô tả chi tiết sản phẩm
    stock INT NOT NULL DEFAULT 0,           -- Số lượng tồn kho
    status ENUM('available', 'out of stock') DEFAULT 'available', -- Trạng thái sản phẩm
    image_url VARCHAR(255)                  -- Đường dẫn hình ảnh
);

-- Thêm ràng buộc khóa ngoại để liên kết bảng Product với bảng products
ALTER TABLE Product
ADD CONSTRAINT fk_product_id
FOREIGN KEY (product_id) REFERENCES products(id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Thêm dữ liệu mẫu vào bảng Product
INSERT INTO Product (product_id, description, stock, status, image_url)
VALUES
(1, 'Description for Product A', 50, 'available', 'product-a.jpg'),
(2, 'Description for Product B', 30, 'available', 'product-b.jpg'),
(3, 'Description for Product C', 0, 'out of stock', 'product-c.jpg'),
(4, 'Description for Product D', 20, 'available', 'product-d.jpg'),
(5, 'Description for Product E', 15, 'available', 'product-e.jpg'),
(6, 'Description for Product F', 10, 'available', 'product-f.jpg');

-- Kiểm tra dữ liệu trong bảng products
SELECT * FROM products;

-- Kiểm tra dữ liệu trong bảng Product
SELECT * FROM Product;

-- Kết hợp dữ liệu từ hai bảng để hiển thị danh sách sản phẩm cùng chi tiết
SELECT 
    p.id AS ProductID, 
    p.product_name AS ProductName, 
    p.price AS Price, 
    pd.description AS Description, 
    pd.stock AS Stock, 
    pd.status AS Status, 
    pd.image_url AS ImageURL
FROM 
    products p
LEFT JOIN 
    Product pd ON p.id = pd.product_id;