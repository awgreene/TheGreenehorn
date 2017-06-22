var express = require("express");
var router = express.Router();

// ROOT ROUTE
router.get("/", function(req, res) {
    res.render("landing");
});

// ROOT ROUTE
router.get("/home", function(req, res) {
    res.render("home");
});

module.exports = router;
