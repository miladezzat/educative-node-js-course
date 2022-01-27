const express = require('express');
const userService = require('./user.service');

const router = new express.Router();

router.post('/register', async (req, res) => {
  const user = await userService.register(req.body);

  res.status(200).send({ user });
});

router.post('/login', async (req, res) => {
  const user = await userService.login(req.body);
  res.status(200).send({ user });
});

module.exports = router;
