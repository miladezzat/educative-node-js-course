const express = require('express');
const userService = require('./user.service');
const checkAuth = require('../middleware/check-auth.middleware');
const userValidation = require('./user.validation.schema');
const validationMiddleware = require('../middleware/validation');

const router = new express.Router();

router.get('/', checkAuth, validationMiddleware(userValidation.getUsersValidator), async (req, res) => {
  const users = await userService.get(req.query);

  res.status(200).send({ users });
});

router.post('/register', validationMiddleware(userValidation.registrationValidator), async (req, res) => {
  const user = await userService.register(req.body);

  res.status(200).send({ user });
});

router.post('/login', validationMiddleware(userValidation.loginValidator), async (req, res) => {
  const user = await userService.login(req.body);
  res.status(200).send({ user });
});

router.get('/me', checkAuth, async (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
