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
    // Normal user
    if (password === req.body.password) {
      // res.send('[+] /signin OK.');
      res.send(
        JSON.stringify({
          name: req.body.email
        })
      );
      // Not matched : failed.
    } else {
      res.send(401, 'wrong credential');
    }
  } else {
    // res.send('[-] /signin redirect to /signup.');
    res.redirect('/signup');
  }
});

module.exports = router;
