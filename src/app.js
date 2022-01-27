const express = require('express');
const path = require('path');
const uploadImagesRoutes = require('./upload-images/upload-image.routes');
const uploadFilesRoutes = require('./uploading-files/uploading-files.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../uploads')));

app.use('/images', uploadImagesRoutes);
app.use('/files', uploadFilesRoutes);

module.exports = app;
