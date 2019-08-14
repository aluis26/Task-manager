// decrypt token received in header to give username or userid. then go to database and select todos where userid = todoid"
//filter through database
//then return array of todos
//cleanup todos so user will receive everything except userid//nice to have

//
var express = require("express");
var router = express.Router();
var db = require("../model/helper");

router.get("/", function (req, res, next) {
  //get all todos for current users
  //return to the client in json format
  let userId = req.user.userId;

  db(`SELECT * FROM todos WHERE userId = ${userId}`).then(resultTodos => {
    console.log("result User \n", resultTodos.data[0]);
    res.json(resultTodos.data[0])
  });
});

router.post("/", function (req, res, next) { });

module.exports = router;
