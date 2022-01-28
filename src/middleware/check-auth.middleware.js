const jwt = require('jsonwebtoken');
const { tokenPublicSecreteKey, tokenSignOptions } = require('../../config/app.config');

const checkAuth = (req, res, next) => {
  const token = req.header('x-auth-token') || req.header('token');

  if (!token) {
    throw new Error('authorization denied');
  }

  try {
    req.user = jwt.verify(token, tokenPublicSecreteKey, tokenSignOptions);

    next();
  } catch (error) {
    throw new Error('authorization denied');
  }
};
module.exports = checkAuth;
