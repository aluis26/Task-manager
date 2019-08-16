var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");

var superSecret = "costabrava";
// route for authenticating users:
router.post("/", function(req, res, next) {
  // store the inputs in variables easy to use:
  var email = req.body.userEmail;
  var password = req.body.userPassword;
 

  // find the user
  db(`SELECT * FROM users WHERE userEmail = ('${email}') ;`).then(
    resultUser => {
      console.log("result User \n", resultUser.data[0]);
      if (resultUser.data[0].userEmail != email) {
        // user does not exist (no email)
        res.status(400).json({
          code: "400",
          message: "User does not exist"
        });

        // if the user exists check the password
      } else {
        db(
          `SELECT userPassword FROM users WHERE userEmail = ('${email}');`
        ).then(resultPassword => {
          console.log("user password", resultPassword.data[0]);
          if (resultPassword.data[0].userPassword != password) {
            res.status(401).json({
              code: "401",
              message: "wrong email or password"
            });

            // if password is also correct generate and send a token.
          }
        });
      }

      var token = jwt.sign(
        {
          userId: resultUser.data[0].id
        },
        superSecret
        // {
        //   expiresInMinutes: 1440 // expires in 24 hours
        // }
      );
      // return the information including token as JSON
      return res.json({
        accessToken: token,
        message: "here is your token"
      });
    }
  );
});

module.exports = router;
