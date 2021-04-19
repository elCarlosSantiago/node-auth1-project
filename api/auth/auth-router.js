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

router.get('/logout', (req, res, next) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        next({ message: 'Logout unsuccessful' });
      } else {
        res.json({ message: 'logged out' });
      }
    });
  } else {
    next({ message: 'no session' });
  }
});

module.exports = router;
