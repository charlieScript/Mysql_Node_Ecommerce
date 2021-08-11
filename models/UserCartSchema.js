const UserCartSchema = `
  CREATE TABLE user_cart (
    customer_id VARCHAR(50) UNIQUE NOT NULL,
    product_id INT NOT NULL,
    time_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(customer_id, product_id),
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY(product_id) REFERENCES products(product_id) ON DELETE CASCADE
  )
`;
const config = require('../configDB');

const runSchema = async () => {
  try {
    const mysql2 = require('mysql2/promise');
    const connection = await mysql2.createConnection(config);
    await connection.query(UserCartSchema);
    console.log('USERCART Created');
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runSchema();
