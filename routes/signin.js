var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res) {
  const { email = '', password = '' } = req.body;

  const data = await users.getUser({ email });
  const hasUser = !!data.length;

  if (hasUser) {
    const passwordFromDB = data[0].password;
    const isSamePassword = password === passwordFromDB;

    if (isSamePassword) {
      res.json({ signInOk: true });
    } else {
      res.json({
        signInOk: false,
        message: 'password가 틀렸습니다.'
      });
    }
  } else {
    res.json({
      signInOk: false,
      message: '해당 email이 존재하지 않습니다.'
    });
  }
});

module.exports = router;
