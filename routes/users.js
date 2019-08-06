var express = require('express');
var router = express.Router();
//if we need to use MySQL connection:
const db = require("../model/helper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  // sample MySQL query
  // db("SELECT * FROM users ORDER BY id ASC;")
  //   .then(results => {
  //     if (results.error) {
  //       // Handle this error
  //     }
  //
  //     // Add your code here
  //
  //   });
  res.json('respond with a resource');
});

module.exports = router;
