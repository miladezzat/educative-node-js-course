const multer = require('multer');
const path = require('path');

const createMulter = (extensions = [], message = '') => multer({
  storage: multer.memoryStorage(),
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);

    if (!extensions.includes(ext.toLowerCase())) {
      req.error = new Error(message);
    }

    callback(null, true);
  },

  limits: {
    fileSize: 25 * 1024 * 1024, // max file size will be 25MB
  },
});

module.exports = createMulter;
