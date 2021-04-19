const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('../users/users-model');
const {
  checkPasswordLength,
  checkUsernameExists,
  checkUsernameFree,
} = require('./auth-middleware');

router.post(
  '/register',
  checkPasswordLength,
  checkUsernameFree,
  async (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
      const newUser = await add({ username, password: hash });
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post('/login', checkUsernameExists, (req, res) => {
  res.json({ message: `Welcome ${req.body.username}` });
});

/**
  3 [GET] /api/auth/logout
  
  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }
  
  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
  */

router.get('/logout', (req, res, next) => {});
module.exports = router;
