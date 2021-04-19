const router = require('express').Router();
const bcrypt = require('bcryptjs')
const {
  checkPasswordLength,
  checkUsernameExists,
  checkUsernameFree,
} = require('./auth-middleware');

/**
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response on username taken:
  status 422
  {
    "message": "Username taken"
  }

  response on password three chars or less:
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */

router.post('/register', checkUsernameFree,(req, res, next) => {
 res.json('register post')
});

/**
 2 [POST] /api/auth/login { "username": "sue", "password": "1234" }
 
 response:
 status 200
 {
   "message": "Welcome sue!"
  }
  
  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
  */
router.post('/login', (req, res, next) => {});

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
