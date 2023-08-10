const jwt = require('jsonwebtoken');

async function createToken(user_id) {
  const token = await jwt.sign({
    user_id
  }, process.env.JWT_SECRET, { expiresIn: '10m' });

  return token;
}

async function validateToken(token) {
  const is_valid = await jwt.verify(token, process.env.JWT_SECRET, {
    maxAge: '10m'
  });

  return is_valid;
}

module.exports = { createToken, validateToken };