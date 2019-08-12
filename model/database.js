require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "todos",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // CREATE THE USERS TABLE
  let sql = "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, userName VARCHAR(25) not null, userEmail VARCHAR(25), userPassword VARCHAR(25), PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
  });

  // ADD A TEST FAKE USER TO THE USERS TABLE
  sql = "INSERT INTO users (userName, userEmail, userPassword) VALUES ('test', 'test@test.com', 'test');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Creation of 'test' user was successful!");
  });

  //ADD TODOS TABLE

  console.log("Closing...");

  con.end();
});
