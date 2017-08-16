var express = require("express");
var router = express.Router();

// LANDING ROUTE
router.get("/", function(req, res) {
  res.render("landing");
});

// HOME ROUTE
router.get("/home", function(req, res) {
  res.render("home");
});

// ABOUT ROUTE
router.get("/about", function(req, res) {
  res.render("about");
});

// CONTACT ROUTE
router.get("/contact", function(req, res) {
  res.render("contact");
});

// Blogs ROUTE
router.get("/blogs", function(req, res) {
  res.render("blogs");
});

module.exports = router;
