const { hashPassword } = require('../helper/password');
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
    const token = createToken(createdUser.toObject());

    return { ...createdUser.toObject(), token };
  }
}

module.exports = new UserService();
