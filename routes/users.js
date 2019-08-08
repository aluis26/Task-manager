var express = require("express");
var router = express.Router();
//if we need to use MySQL connection:
//const db = require("../model/helper");
const userShouldBeLoggedIn = require("./guards/userShouldBeLoggedIn");

router.use(userShouldBeLoggedIn);

/* GET users listing. */
router.get("/", function(req, res, next) {
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
  res.json(
    "if you read this it means the token worked and you passed the guard!"
  );
});

module.exports = router;
