const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aluis000",
  database: "mydb"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});
