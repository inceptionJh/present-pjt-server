const connection = require('../../db');

class Users {
  queryUsers() {
    const query = `SELECT * from users`;

    return this.dbQuery(query);
  }

  queryUser(email) {
    const query = `SELECT * from users where email="${email}"`;

    return this.dbQuery(query);
  }

  createUser(email, password) {
    const query = `
    INSERT INTO users(email, password)
    VALUES("${email}", "${password}")
    `;

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
// m = users.queryUsers();
// console.log(m);

module.exports = users; // new Users();
