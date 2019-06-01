DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products (
item_id INTEGER NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INTEGER(10) NULL, 
PRIMARY KEY (item_id)
)