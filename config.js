const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
  password :  '327d361f!',
  database :  'ddbb_dulce',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
