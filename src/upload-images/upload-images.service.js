const path = require('path');
const sharp = require('sharp');
const { Errors: { BadRequestError } } = require('error-handler-e2');
const { EXTENSIONS } = require('./upload-images.constants');
const { appHost } = require('../../config/app.config');

class UploadImages {
  constructor() {
    this.sharp = sharp;
  }

  async uploadSingleImage(args) {
    const {
      file,
      imageFormat = 'webp',
      imageWidth = null,
      imageHeight = null,
    } = args;

    const resizeOptions = {};

    if (imageFormat && !EXTENSIONS.includes(imageFormat)) {
      throw new BadRequestError('Image format not allowed', { image: 'image format not allowed' });
    }

    if (imageWidth) {
      resizeOptions.width = +imageWidth;
    }

    if (imageHeight) {
      resizeOptions.height = +imageHeight;
    }

    const fileExtension = path.extname(file.originalname);

    const imagePath = `${Math.random()}-${file.originalname.replace(fileExtension, '')}.${imageFormat}`;
    await this.sharp(file.buffer)
      .resize(resizeOptions)
      .toFormat(imageFormat).toFile(`./uploads/${imagePath}`);

    return `${appHost}/${imagePath}`;
  }
}

module.exports = new UploadImages();
