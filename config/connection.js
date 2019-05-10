var mysql = require('mysql');

var connection;
var PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: PORT,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;

