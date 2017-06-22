var express = require("express");
var router = express.Router();

// BLOGS LANDING ROUTE
router.get("/", function(req, res) {
  res.render("blogs");
});

module.exports = router;
