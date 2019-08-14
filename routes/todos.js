// decrypt token received in header to give username or userid. then go to database and select todos where userid = todoid"
//filter through database
//then return array of todos
//cleanup todos so user will receive everything except userid//nice to have

//
var express = require("express");
var router = express.Router();
var db = require("../model/helper");

router.get("/", function(req, res, next) {
  //get all todos for current users
  //return to the client in json format
  let userId = req.user.userId;

  db(`SELECT * FROM todos WHERE userId = ${userId}`).then(resultTodos => {
    console.log("result User \n", resultTodos.data);
    res.json(resultTodos.data);
  });
});

router.post("/", function(req, res, next) {
  let userId = req.user.userId;
  let task = req.body.task;
  let priority = req.body.priority || 0;
  let status = 0;
  let dueDate = req.body.dueDate || "2020-12-12";

  db(
    `INSERT into todos(task, priority, status, dueDate, userId) VALUES ("${task}", ${priority}, ${status}, "${dueDate}", ${userId})`
  ).then(resultNewTodo => {
    console.log("result todo \n", resultNewTodo);

    if (!task) {
      res.status(401).json({
        code: "401",
        message: "Empty todo"
      });
    }
    res.json({ message: "Your todo was added." });
  });
});

// router.put("/:id", function(req, res, next) {
//   let userId = req.user.userId;
//   let id = req.params.id;
//   let task = req.body.task;
//   let dueDate = req.body.dueDate;
//   let status = req.body.status;
//   let priority = req.body.priority;

//   db(
//     `UPDATE todos SET task = "${task}" , priority = ${priority}, status = ${status}, dueDate ="${dueDate}", userId=${userId} WHERE id = ${id}`
//   ).then(resultNewTodo => {
//     console.log("result todo \n", resultNewTodo);
//     res.json({ message: "Your todo was updated." });
//   });
// });

router.put("/:id", function(req, res, next) {
  let userId = req.user.userId;
  let id = req.params.id;
  let task = req.body.task;
  let dueDate = req.body.dueDate;
  let status = req.body.status;
  let priority = req.body.priority;

  db(`UPDATE todos SET task = "${task}" WHERE id = ${id}`).then(
    resultUpdated => {
      console.log("result todo \n", resultUpdated);
      res.json({ message: "your todo was updated" });
    }
  );
});

router.delete("/:id", function(req, res, next) {
  let id = req.params.id;

  db(`DELETE from todos WHERE id=${id}`).then(resultNewTodo => {
    console.log("result todo \n", resultNewTodo);
    res.json({ message: "Your todo was deleted." });
  });
});

module.exports = router;
