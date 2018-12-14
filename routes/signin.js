var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.post('/', async function(req, res, next) {
  const data = await users
    .queryUser(req.body.email)
    .then(data => data)
    .catch(err => console.error(err.message));

  if (data.length !== 0) {
    const [{ password }] = data;
    if (password === req.body.password) {
      res.send('[+] /signin OK.');
    }
  } else {
    res.send('[-] /signin redirect to /signup.');
  }
});

module.exports = router;
