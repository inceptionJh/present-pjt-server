var mysql = require('mysql');
require('dotenv').config();

var dbConnection = mysql.createConnection({
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'present'
});

dbConnection.connect();

module.exports = dbConnection;
