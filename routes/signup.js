var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res, next) {
  const { email, password } = req.body;

  const data = await users.getUser({ email });
  const hasUser = !!data.length;

  if (!hasUser) {
    users.postUser({ email, password });

    res.json({ signUpOk: true });
  } else {
    const err = new Error(
      JSON.stringify({
        signInOk: false,
        message: 'ALREADY_REGISTERED'
      })
    );
    err.status = 403;
    next(err);
  }
});

module.exports = router;
