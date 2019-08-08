var express = require("express");
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.post("/", function(req, res, next) {
  var name = req.header.userName;
  var password = req.header.userPassword;
  var email = req.header.userEmail;
  var id = req.header.id;

  // SELECT * FROM users WHERE userName="Ainura";

  db(
    "INSERT INTO users(id, userPassword, userEmail, userName) VALUES ('"+id+"",
    "+password+",
    name+,
    email + ');"
  ).then(results => {
    res.send(results);
  });
});

module.exports = router;
