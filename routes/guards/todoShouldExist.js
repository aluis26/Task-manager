var express = require("express");
var router = express.Router();
var todos = require("../todos")

// route middleware to validate todo :id
let todoShouldExist = function (req, res, next) {
    let id = req.params.id
    if (!id) {
        res.status(404).send({
            code: "404",
            message: "This todo does not exist"
        })
    } else {
        next()
    }
}


module.exports = todoShouldExist;


