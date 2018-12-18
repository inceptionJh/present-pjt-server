const TABLE_NAME = 'users';

module.exports = {
  createUser: function({ email, password }) {
    return `
      INSERT INTO ${TABLE_NAME}(email, password)
      VALUES("${email}", "${password}")
    `;
  },

  readUser: function({ email }) {
    return `SELECT * FROM ${TABLE_NAME} WHERE id=${id}`;
  },

  readUsers: function() {
    return `SELECT * FROM ${TABLE_NAME}`;
  },

  updateUserPassword: function({ email, password }) {
    return `
      UPDATE ${TABLE_NAME}
      SET password="${password}"
      WHERE id=${email};
    `;
  },

  deleteUser: function({ email }) {
    return `DELETE FROM ${TABLE_NAME} WHERE id=${email}`;
  }
};
