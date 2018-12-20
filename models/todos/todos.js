const connection = require('../../db');
const {
  readTodo,
  readTodos,
  createTodo,
  deleteTodo,
  updateTodo
} = require('./query');

class Todos {
  getTodo({ id }) {
    const query = readTodo({ id });
    return Todos.dbQuery(query);
  }

  getTodos() {
    const query = readTodos();
    return Todos.dbQuery(query);
  }

  postTodo({ id, state, text }) {
    const query = createTodo({ id, state, text });
    return Todos.dbQuery(query);
  }

  deleteTodo({ id }) {
    const query = deleteTodo({ id });
    return Todos.dbQuery(query);
  }

  patchTodo({ id, state, text }) {
    const query = updateTodo({ id, state, text });
    return Todos.dbQuery(query);
  }

  static dbQuery(query) {
    return new Promise((resolve, reject) => {
      connection.query(query, function(err, rows, fields) {
        if (err) reject(new Error(err));
        resolve(rows);
      });
    });
  }
}

const todos = new Todos();

module.exports = todos;
