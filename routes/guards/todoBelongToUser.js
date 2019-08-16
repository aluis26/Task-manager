var express = require("express");
var router = express.Router();
var db = require("../../model/helper");

const todoBelongToUser = function (req, res, next) {
const userId = req.user.id;
const todoId = req.params.userId;

if(userId == todoId){
  next()
} else{
    res.status(404).send({
            code: "403",
            message: "You are not allowed to edit this todo"
        })
  }
}

module.exports = todoBelongToUser;
