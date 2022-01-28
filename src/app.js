const express = require('express');
require('express-async-errors');
const path = require('path');
const bodyParser = require('body-parser');
const {
  Middleware: {
    handleErrorMiddleware,
    loggerMiddleware,
    notFoundMiddleware,
  },
} = require('error-handler-e2');
const uploadImagesRoutes = require('./upload-images/upload-image.routes');
const uploadFilesRoutes = require('./uploading-files/uploading-files.routes');
const userRoutes = require('./user/user.routes');

const app = express();

app.use(loggerMiddleware);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, '../uploads')));

app.use('/images', uploadImagesRoutes);
app.use('/files', uploadFilesRoutes);
app.use('/users', userRoutes);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
