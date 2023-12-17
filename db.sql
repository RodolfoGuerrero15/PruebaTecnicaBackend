CREATE DATABASE PruebaFractal;

-- Table to store orders
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    num_products INT NOT NULL,
    final_price DECIMAL(10, 2) NOT NULL
);

-- Table to store products
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL
);

-- Table to associate products with orders 
CREATE TABLE order_products (
    order_number VARCHAR(255) NOT NULL,
    product_id INT,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (order_number, product_id),
    FOREIGN KEY (order_number) REFERENCES orders(order_number),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);