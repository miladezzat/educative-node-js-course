const multer = require('multer');
const path = require('path');
const { Errors: { BadRequestError } } = require('error-handler-e2');

const createMulter = (extensions = [], message = '') => multer({
  storage: multer.memoryStorage(),
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);

    if (!extensions.includes(ext.toLowerCase())) {
      req.error = new BadRequestError(message, { extension: ext.toLowerCase() });
    }

    callback(null, true);
  },

  limits: {
    fileSize: 25 * 1024 * 1024, // max file size will be 25MB
  },
});

module.exports = createMulter;
