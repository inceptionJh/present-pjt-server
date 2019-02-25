var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res, next) {
  const { email = '', password = '' } = req.body;

  const data = await users.getUser({ email });
  const hasEmail = !!data.length;

  if (hasEmail) {
    const passwordFromDB = data[0].password;
    const isSamePassword = password === passwordFromDB;

    if (isSamePassword) {
      req.session.token = email;

      res.json({ signInOk: true });
    } else {
      const err = new Error(
        JSON.stringify({
          signInOk: false,
          message: 'WRONG_PASSWORD'
        })
      );
      err.status = 401;
      next(err);
    }
  } else {
    const err = new Error(
      JSON.stringify({
        signInOk: false,
        message: 'NEED_TO_SIGNUP'
      })
    );
    err.status = 401;
    next(err);
  }
});

module.exports = router;
