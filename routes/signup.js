var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res) {
  const { email, password } = req.body;

  const data = await users.getUser({ email });
  const hasUser = !!data.length;

  if (!hasUser) {
    users.postUser({ email, password });

    res.json({ signUpOk: true });
  } else {
    res.json({ signUpOk: false, message: '[-] NOK : Already registered.' });
  }
});

module.exports = router;
