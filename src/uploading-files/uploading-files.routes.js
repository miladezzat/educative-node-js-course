const express = require('express');
const multer = require('../helper/multer');
const uploadFileConstants = require('./uploading-files.constants');
const fileUploadingService = require('./uploading-files.service');

const router = new express.Router();

router.post('/single', multer(uploadFileConstants.EXTENSIONS).single('file'), async (req, res) => {
  const url = await fileUploadingService.uploadSingleFile({ file: req.file });

  res.status(200).send({ url });
});

module.exports = router;
