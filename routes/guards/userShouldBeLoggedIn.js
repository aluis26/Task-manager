var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../../model/helper");

var superSecret = "costabrava";
//guard
// route middleware to verify a token
var userShouldBeLoggedIn = function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["x-access-token"];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, superSecret, function (err, decoded) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Failed to authenticate token."
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.user = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an HTTP response of 403 (access forbidden) and an error message
    return res.status(401).send({
      success: false,
      message: "No token provided."
    });
  }

  // next() used to be here
};

module.exports = userShouldBeLoggedIn;
