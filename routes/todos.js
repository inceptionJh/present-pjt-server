var express = require('express');
var router = express.Router();

var {
  getTodo,
  getTodos,
  postTodo,
  deleteTodo,
  patchTodo
} = require('../models/todos/todos');

router.post('/', async function(req, res) {
  const { id, state, text } = req.body;

  const queryResult = await postTodo({ id, state, text });
  res.end(JSON.stringify(queryResult));
});

router.get('/', async function(req, res) {
  const id = parseInt(req.param('id'));
  const queryResult = await getTodo({ id });
  res.end(JSON.stringify(queryResult));
});

router.get('/all', async function(req, res) {
  const queryResult = await getTodos();
  res.end(JSON.stringify(queryResult));
});

router.patch('/', async function(req, res) {
  const { id, state, text } = req.body;

  const queryResult = await patchTodo({ id, state, text });
  res.end(JSON.stringify(queryResult));
});

router.delete('/', async function(req, res) {
  const { id } = req.body;

  const queryResult = await deleteTodo({ id });
  res.end(JSON.stringify(queryResult));
});

module.exports = router;
