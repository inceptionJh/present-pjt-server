var express = require('express');
var router = express.Router();

router.get('/', async function(req, res) {
  req.session.token = null;
  res.json({ hasToken: false });
});

module.exports = router;
