var express = require('express');
var router = express.Router();

router.post('signin', function(req, res, next) {
  req.session.regenerate(function(err) {
    // will have a new session here
  });
});

router.post('signout', function(req, res, next) {
  req.session.destroy(function(err) {
    // cannot access session here
  });
});

module.exports = router;
