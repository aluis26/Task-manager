var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
// var fakeUsers = require("./fakeusers.js");
var db = require("../model/helper");

/* GET home page. */
router.get("/", function(req, res, next) {
  db("SELECT * FROM users;").then(results => res.send(results));
});

module.exports = router;
