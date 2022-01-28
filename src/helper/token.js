const jwt = require('jsonwebtoken');
const { tokenPrivateSecreteKey, tokenSignOptions } = require('../../config/app.config');

const createToken = (payload) => jwt.sign(payload, tokenPrivateSecreteKey, tokenSignOptions);

module.exports = {
  createToken,
};
