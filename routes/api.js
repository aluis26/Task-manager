var express = require("express");
var router = express.Router();
// var indexRouter = require("./index");
// var usersRouter = require("./users");
var loginRouter = require("./login");
var signupRouter = require("./signup");
var todoRouter = require("./todos");
var userShouldBeLoggedIn = require("./guards/userShouldBeLoggedIn");



// router.use("/", indexRouter);
// router.use("/users", usersRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.use("/todos", userShouldBeLoggedIn, todoRouter);
router.use("/todos", todoRouter);

module.exports = router;
