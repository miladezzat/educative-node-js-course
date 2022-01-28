const jwt = require('jsonwebtoken');
const { Errors: { UnAuthorizedError } } = require('error-handler-e2');
const { tokenPublicSecreteKey, tokenSignOptions } = require('../../config/app.config');

const checkAuth = (req, res, next) => {
  const token = req.header('x-auth-token') || req.header('token');

  if (!token) {
    throw new UnAuthorizedError('authorization denied');
  }

  try {
    req.user = jwt.verify(token, tokenPublicSecreteKey, tokenSignOptions);

    next();
  } catch (error) {
    throw new UnAuthorizedError('authorization denied');
  }
};
module.exports = checkAuth;
