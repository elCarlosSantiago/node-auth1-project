const { findBy } = require('../users/users-model');
const bcrypt = require('bcryptjs');

function restricted(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    next({ message: 'You shall not pass!', status: 401 });
  }
}

async function checkUsernameFree(req, res, next) {
  const { username } = req.body;
  try {
    const [user] = await findBy({ username });
    if (!user) {
      next();
    } else {
      next({ message: 'Username taken', status: 422 });
    }
  } catch (err) {
    next(err);
  }
}

async function checkUsernameExists(req, res, next) {
  const { username, password } = req.body;
  try {
    const [user] = await findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      next();
    } else {
      next({ message: 'Invalid credentials', status: 401 });
    }
  } catch (err) {
    next(err);
  }
}

function checkPasswordLength(req, res, next) {
  const { password } = req.body;
  if (password === undefined || password.length < 3) {
    next({ message: 'Password must be longer than 3 chars', status: 422 });
  } else {
    next();
  }
}

module.exports = {
  restricted,
  checkPasswordLength,
  checkUsernameExists,
  checkUsernameFree,
};
