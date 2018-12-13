var express = require('express');
var router = express.Router();

router.post('/', async function(req, res, next) {
  // TODO: session destroy
  // res.send('[+] /signout');
  res.redirect('/auth/signout');
});

module.exports = router;
