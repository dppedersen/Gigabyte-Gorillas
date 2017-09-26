const mysql = require("mysql");
const config = require("../config.js");

const connection = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPass,
  database: config.dbName
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting to Db", err);
    return;
  }
  console.log("DBConnection established");
});

module.exports = connection;
