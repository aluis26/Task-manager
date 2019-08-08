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
  db("SELECT * FROM users WHERE userEmail = ('" + email + "') ;").then(
    resultUser => {
      if (resultUser.data[0].userEmail != email) {
        res.status(400).send("User does not exist");

        // if the user exists check the password
      } else {
        db(
          "SELECT userPassword FROM users WHERE userEmail = ('" + email + "');"
        ).then(resultPassword => {
          if (resultPassword.data[0].userPassword != password) {
            res.status(400).send("Wrong password");

            // if password is also correct generate and send a token.
          } else {
            var token = jwt.sign(
              {
                userId: db(
                  "SELECT id FROM users WHERE userEmail = ('" + email + "');"
                )
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
        });
      }
    }
  );
});

// THIS CODE WORKS WITH DUMMY DATA

// var user = fakeUsers.filter(function(e) {
//   return e.userName == name;
// });

// if (!user[0]) {
//   res.status(404).send("User does not exist");
// } else {
//   // check if password matches
//   if (user[0].userPassword !== password) {
//     res.status(404).send("Wrong password");
//   } else {
//     //if password is right and user is right, generate a token
//     var token = jwt.sign(
//       {
//         userId: user[0].id
//       },
//       superSecret
//       // {
//       //   expiresInMinutes: 1440 // expires in 24 hours
//       // }
//     );
//     // return the information including token as JSON
//     return res.json({
//       token: token,
//       message: "worked"
//     });
//   }
// }
// )}

// if user is found and password is right
// create a token

// return the information including token as JSON

//validate if the credentials are ok
//if they are ok, check if a token exists
//if it does not exists, generate a token for this user
//return the token to the user
//   res.json({ accessToken: "faketoken" });
//  });

module.exports = router;
