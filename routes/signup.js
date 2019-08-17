var express = require("express");
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.post("/", function(req, res, next) {
  console.log(req);
  var userName = req.body.userName;
  var password = req.body.userPassword;
  var email = req.body.userEmail;

  // SELECT * FROM users WHERE userName="Ainura";

  // res.send({ userName });

  db(
    "INSERT INTO users(userPassword, userEmail, userName) VALUES ( '" +
      password +
      "', '" +
      email +
      "', '" +
      userName +
      "');"
  ).then(results => {
    res.status(200).send("user created");
  });
});

module.exports = router;
