var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json("This is the API home route. If you read this means the API connection is working!");
});

module.exports = router;
