const UserSchema = `
  CREATE TABLE customers (
    customer_id VARCHAR(50) UNIQUE NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
  )
`
const config = require('../configDB')

const runSchema = async () => {
  try {
    const mysql2 = require('mysql2/promise');
    const connection = await mysql2.createConnection(config);
    await connection.query(UserSchema);
    console.log('UserSchema Created');
    process.exit(1)
  } catch (error) {
    console.log(error)
  }
  
}

runSchema()

