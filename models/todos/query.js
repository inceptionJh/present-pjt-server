const TABLE_NAME = 'todos';

module.exports = {
  createTodo: ({ id, state, text }) => {
    return `
      INSERT INTO ${TABLE_NAME}(id, state, text)
      VALUES(${id}, "${state}", "${text}")
    `;
  },

  readTodo: ({ id }) => `SELECT * FROM ${TABLE_NAME} WHERE id=${id}`,

  readTodos: () => `SELECT * FROM ${TABLE_NAME}`,

  updateTodo: ({ id, state, text }) => `
    UPDATE ${TABLE_NAME}
    SET state=${state}, text="${text}"
    WHERE id=${id};
  `,

  deleteTodo: ({ id }) => `DELETE FROM ${TABLE_NAME} WHERE id=${id}`
};
