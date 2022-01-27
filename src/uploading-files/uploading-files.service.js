const fs = require('fs');
const { appHost } = require('../../config/app-config');

class UploadImages {
  constructor() {
    this.fs = fs;
  }

  async uploadSingleFile(args) {
    const { file } = args;
    const filePath = `${Math.random()}-${file.originalname}`;

    await this.fs.writeFileSync(`./uploads/${filePath}`, file.buffer, { encoding: 'utf-8' });

    return `${appHost}/${filePath}`;
  }
}

module.exports = new UploadImages();
