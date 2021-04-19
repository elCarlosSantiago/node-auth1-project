function restricted(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    next({ message: 'You shall not pass!', status: 401 });
  }
}

/*
  If the username in req.body already exists in the database

  status 422
  {
    "message": "Username taken"
  }
*/
function checkUsernameFree() {}

/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
function checkUsernameExists() {}

/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
function checkPasswordLength() {}

module.exports = {
  restricted,
  checkPasswordLength,
  checkUsernameExists,
  checkUsernameFree,
};
