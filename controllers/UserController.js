const { v4 } = require('uuid');
const config = require('../configDB');
const { createConnection } = require('mysql2/promise');
const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!(first_name, last_name, email, password)) {
      return res
        .status(401)
        .json({ message: 'please enter the required parameter' });
    }
    // query database
    let sql = `INSERT INTO customers (
        customer_id,
        first_name,
        last_name,
        email,
        password
      )
    VALUES (
        '${v4()}',
        '${first_name}',
        '${last_name}',
        '${email}',
        '${password}'
      );`;
    const getIDQuery = `SELECT customer_id FROM customers WHERE customer_id = '${v4()}'`
    const connection = await createConnection(config);
    const [rows, fields] = await connection.query(sql);
    console.log(rows, fields);
    res.status(200).send({ message: 'User Created!' });
  } catch (error) {
    console.log(error);
    res.status(400).send('an error occurred');
  }
};

module.exports = {
  registerUser,
};
