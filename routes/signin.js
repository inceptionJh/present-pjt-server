var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res) {
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
      res.json({
        signInOk: false,
        message: 'WRONG_PASSWORD'
      });
    }
  } else {
    res.json({
      signInOk: false,
      message: 'NEED_TO_SIGNUP'
    });
  }
});

module.exports = router;
