const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: maxAge,
  });
};

const verify = (token) => {
  return jwt.verify(token, process.env.JWT_TOKEN);
};

const decode = (token) => {
  return jwt.decode(token);
};

module.exports = {
  createToken,
  decode,
  verify,
};
