DROP TABLE products, customers, user_cart;
DESCRIBE TABLE customers;

DELETE * FROM customers;

CREATE TABLE customers (
    user_id INT UNIQUE NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
  );

INSERT INTO customers(user_id, first_name, last_name, email, password) VALUES(1, 'cccc', 'ddd', 'ddd', 'dd');

AUTO_INCREMENT


CREATE TABLE user_cart (
    customer_id VARCHAR(50) UNIQUE NOT NULL,
    product_id INT NOT NULL,
    time_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(customer_id, product_id),
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCASE,
    FOREIGN KEY(product_id) REFERENCES products(product_id)
  );

INSERT INTO products (
    product_name,
    price,
    availability,
    quantity
  )
VALUES (
    'BOOK',
    30.202,
    TRUE,
    20
  );  


SELECT customer_id, first_name FROM customers WHERE customer_id = 'd2d944bf-0cd6-432a-8f39-fb34dab2d06f';