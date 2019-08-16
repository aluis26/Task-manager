var express = require("express");
var router = express.Router();
var todos = require("../todos")
var db = require("../../model/helper");

// route middleware to validate todo :id
let todoShouldExist = function (req, res, next) {
    let id = req.params.id //todo id
    if (id) { //if there is an id, run query to db and do next middleware
        db(`SELECT * FROM todos WHERE id = ${id}`).then(todo => {
            if (todo.data[0].id) {
                req.todo = todo.data[0]
                next()
            } else { // else (meaning todo does not exist, return error)
                res.status(404).send({
                    code: "404",
                    message: "This todo does not exist"
                })
            }
        })
    } else {
        res.status(404).send({
            code: "404",
            message: "This todo does not exist"
        })
    }
}

module.exports = todoShouldExist;


