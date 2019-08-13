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
  let sql = "";
  // CREATE THE USERS TABLE
  sql =
    "DROP TABLE if exists users; CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT, userName VARCHAR(255) not null, userEmail VARCHAR(255), userPassword VARCHAR(255), PRIMARY KEY (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");
  });

  // ADD A TEST FAKE USER TO THE USERS TABLE
  sql =
    "INSERT INTO users (userName, userEmail, userPassword) VALUES ('test', 'test@test.com', 'test');";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Creation of 'test' user was successful!");
  });

  //ADD TODOS TABLE
  sql =
    "DROP TABLE if exists todos; CREATE TABLE todos(todoId INT(11) NOT NULL AUTO_INCREMENT, task VARCHAR(255) not null, priority INT(1), status INT(1), dueDate DATETIME, userId INT(11), PRIMARY KEY (todoId), FOREIGN KEY (userId) REFERENCES users (id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `todo` was successful!");
  });

  sql =
    "INSERT INTO todos (task, priority, status, dueDate) VALUES ('test task', 1, 1, '2020-12-12', 2);";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Creation of task was successful!");
  });
  console.log("Closing...");

  con.end();
});
