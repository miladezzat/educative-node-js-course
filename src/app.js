const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const uploadImagesRoutes = require('./upload-images/upload-image.routes');
const uploadFilesRoutes = require('./uploading-files/uploading-files.routes');
const userRoutes = require('./user/user.routes');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, '../uploads')));

app.use('/images', uploadImagesRoutes);
app.use('/files', uploadFilesRoutes);
app.use('/users', userRoutes);

module.exports = app;
