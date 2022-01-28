const express = require('express');
const userService = require('./user.service');
const checkAuth = require('../middleware/check-auth.middleware');

const router = new express.Router();

router.post('/register', async (req, res) => {
  const user = await userService.register(req.body);

  res.status(200).send({ user });
});

router.post('/login', async (req, res) => {
  const user = await userService.login(req.body);
  res.status(200).send({ user });
});

router.get('/me', checkAuth, async (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
