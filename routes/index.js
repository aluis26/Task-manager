var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var fakeUsers = require("./fakeusers.js");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database name"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(fakeUsers);
});

var superSecret = "costabrava";
// route for authenticating users:
router.post("/login", function(req, res, next) {
  var name = req.body.userName;
  var password = req.body.userPassword;
  // find the user

  var user = fakeUsers.filter(function(e) {
    return e.userName == name;
  });

  if (!user[0]) {
    res.status(404).send("User does not exist");
  } else {
    // check if password matches
    if (user[0].userPassword !== password) {
      res.status(404).send("Wrong password");
    } else {
      //if password is right and user is right, generate a token
      var token = jwt.sign(
        {
          userId: user[0].id
        },
        superSecret
        // {
        //   expiresInMinutes: 1440 // expires in 24 hours
        // }
      );
      // return the information including token as JSON
      return res.json({
        token: token,
        message: "worked"
      });
    }
  }
});

// if user is found and password is right
// create a token

// return the information including token as JSON

//validate if the credentials are ok
//if they are ok, check if a token exists
//if it does not exists, generate a token for this user
//return the token to the user
//   res.json({ accessToken: "faketoken" });
//  });

router.use(function(req, res, next) {});

module.exports = router;
