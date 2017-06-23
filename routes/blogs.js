var express = require("express");
var router = express.Router();
var Blog = require("../models/blogs");

// BLOGS LANDING ROUTE
router.get("/", function(req, res) {
  Blog.find({}, function(err, blogs){
    if(err) {
      console.log(err);
    } else {
      res.render("blogs", {blogs: blogs});
    }
  });
});

module.exports = router;
