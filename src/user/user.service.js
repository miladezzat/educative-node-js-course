const _ = require('lodash');
const { hashPassword, compareHashedPassword } = require('../helper/password');
const { createToken } = require('../helper/token');
const UserModel = require('./user.schema');

class UserService {
  constructor() {
    this.model = UserModel;
  }

  getByEmail(email) {
    return this.model.findOne({ email, isDeleted: false }).lean();
  }

  async register(args) {
    const { password, email } = args;

    const user = await this.getByEmail(email);

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const createdUser = await this.model.create({ ...args, password: hashedPassword });

    const token = createToken(_.omit(createdUser.toObject(), ['password']));

    return { ..._.omit(createdUser.toObject(), ['password']), token };
  }

  /**
   *
   * @param {Object} args
   * @param {String} args.email
   * @param {String} args.password
   */
  async login(args) {
    const { email, password } = args;
    const user = await this.getByEmail(email);

    if (!user) {
      throw new Error('User not exists');
    }

    const passwordIsMatch = await compareHashedPassword(password, user.password);

    if (!passwordIsMatch) {
      throw new Error('Password not correct');
    }

    const token = createToken(_.omit(user, ['password']));

    return { ..._.omit(user, ['password']), token };
  }
}

module.exports = new UserService();
