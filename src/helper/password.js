const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

/**
 *
 * @param {String} password
 * @returns {Promise<String>}
 *
 * @description this for make password hashed
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

  return bcrypt.hash(password, salt);
};

/**
 *
 * @param {String} plainPassword
 * @param {String} hashedPassword
 * @returns {Promise<Boolean>}
 *
 * @description compare plain text password and hashed password
 */
const compareHashedPassword = (plainPassword, hashedPassword) => bcrypt.compare(plainPassword, hashedPassword);

module.exports = {
  hashPassword,
  compareHashedPassword,
};
