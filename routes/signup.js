var express = require("express");
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.post("/", function(req, res, next) {
  var userName = req.headers.name;
  var password = req.headers.password;
  var email = req.headers.email;
  var id = req.headers.id;

  // SELECT * FROM users WHERE userName="Ainura";

  // res.send({ userName });

  db(
    "INSERT INTO users(id, userPassword, userEmail, userName) VALUES ('" +
      id +
      "', '" +
      password +
      "', '" +
      userName +
      "', '" +
      email +
      "');"
  ).then(results => {
    res.status(200).send("user created");
  });
});

module.exports = router;
