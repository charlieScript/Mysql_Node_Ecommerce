const productSchema = `
  CREATE TABLE products (
    product_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
    product_name VARCHAR(50) NOT NULL UNIQUE,
    price DECIMAL(30,2) NOT NULL,
    availability BOOLEAN NOT NULL,
    quantity INT(50) NOT NULL
  )
`;
const config = require('../configDB');

const runSchema = async () => {
  try {
    const mysql2 = require('mysql2/promise');
    const connection = await mysql2.createConnection(config);
    await connection.query(productSchema);
    console.log('productSchema Created');
    process.exit(1);
  } catch (error) {
    console.log(error);
  }
};

runSchema();
