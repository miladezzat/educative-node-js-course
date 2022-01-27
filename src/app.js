const express = require('express');
const path = require('path');
const uploadImagesRoutes = require('./upload-images/upload-image.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../uploads')));

app.use('/images', uploadImagesRoutes);

module.exports = app;
