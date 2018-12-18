var express = require('express');
var users = require('../models/users/users');

var router = express.Router();

router.post('/', async function(req, res) {
  const { email, password } = req.body;

  const data = await users.getUser({ email });

  if (data.length) {
    users.postUser({ email, password });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ signOk: true }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end({ message: '[-] NOK : Already registered.' });
  }
});

module.exports = router;
