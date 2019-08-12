var express = require("express");
var router = express.Router();
var db = require("../model/helper");
const uuidv4 = require("uuid/v4");

/* GET home page. */
router.post("/", function(req, res, next) {
  console.log(req);
  var userName = req.body.userName;
  var password = req.body.userPassword;
  var email = req.body.userEmail;
  var id = uuidv4();

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
    res.status(200).send({ res: "ok" });
  });
});

module.exports = router;
