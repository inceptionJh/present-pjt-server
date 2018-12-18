const connection = require('../../db');
const {
  updateUserPassword,
  createUser,
  deleteUser,
  readUser,
  readUsers
} = require('./query');

class Users {
  getUser({ email }) {
    const query = readUser({ email });
    return this.dbQuery(query);
  }

  getUsers() {
    const query = readUsers();
    return this.dbQuery(query);
  }

  postUser({ email, password }) {
    const query = createUser({ email, password });
    return this.dbQuery(query);
  }

  deleteUser({ email }) {
    const query = deleteUser({ email });
    return this.dbQuery(query);
  }

  patchUser({ email, password }) {
    const query = updateUserPassword({ email, password });
    return this.dbQuery(query);
  }

  dbQuery(query) {
    return new Promise((resolve, reject) => {
      connection.query(query, function(err, rows, fields) {
        if (err) reject(new Error(err));
        resolve(rows);
      });
    });
  }
}

const users = new Users();

module.exports = users; // new Users();
