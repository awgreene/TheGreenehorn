var express = require("express");
var router = express.Router();

// LANDING ROUTE
router.get("/", function(req, res) {
  res.render("home");
});

// WORK ROUTE
router.get("/portfolio", function(req, res) {
  res.render("portfolio");
});

// Blogs ROUTE
router.get("/blogs", function(req, res) {
  res.render("blogs");
});

module.exports = router;
