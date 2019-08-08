var express = require("express");
var router = express.Router();
var indexRouter = require("./index");
var usersRouter = require("./users");
var loginRouter = require("./login");
var signupRouter = require("./signup");

router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);

module.exports = router;
