var express = require('express');
var router = express.Router();
var users = require('../models/users/users');

router.get('/', async function(req, res, next) {
  const queryResult = await users.queryUsers();
  res.end(JSON.stringify(queryResult));
});

module.exports = router;
