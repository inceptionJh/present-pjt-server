var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.post('/', function(req, res, next) {
  users
    .queryUser(req.body.email)
    .then(data => {
      if (data.length === 0) {
        users.createUser(req.body.email, req.body.password).then(rows => {
          console.log(rows);
        });
        // res.end('[+] Signup OK');
        res.redirect('/signin');
      } else {
        console.warn('[-] Already registered.');
        // TODO: redirect
        // res.redirect('/login');
        res.end('[-] NOK : Already registered.');
      }
    })
    .catch(err => console.error(err.message));
});

module.exports = router;
