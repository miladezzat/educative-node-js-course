const express = require('express');
const multer = require('../helper/multer');
const uploadImagesConstants = require('./upload-images.constants');
const uploadImagesService = require('./upload-images.service');

const router = new express.Router();

router.post('/single', multer(uploadImagesConstants.EXTENSIONS).single('image'), async (req, res) => {
  const url = await uploadImagesService.uploadSingleImage({ file: req.file, ...req.body });

  res.status(200).send({ url });
});

module.exports = router;
