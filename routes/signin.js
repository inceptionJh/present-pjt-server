var express = require('express');
var router = express.Router();
var users = require('../models/users/users');

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
      res.status(401).send(
        JSON.stringify({
          error: 'NOT-MATCHED'
        })
      );
    }
  } else {
    // res.send('[-] /signin redirect to /signup.');
    res.status(401).send(
      JSON.stringify({
        error: 'NEED-TO-SIGNUP'
      })
    );
    // res.redirect('/signup');
  }
});

router.options('/', async function(req, res) {
  res.status(200).send('OK');
});

module.exports = router;
