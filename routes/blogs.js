var express = require("express");
var router = express.Router();
var Blog = require("../models/blogs");

// BLOGS LANDING ROUTE
router.get("/", function(req, res) {
  Blog.find({}, function(err, blogs){
    if(err) {
      console.log(err);
    } else {
      res.render("blogs/index", {blogs: blogs});
    }
  });
});

// NEW ROUTE
router.get("/new",function(req,res){
  res.render("blogs/new");
});

// CREATE ROUTE
router.post("/", function(req, res){
  Blog.create(req.body.blog, function(err, blog) {
    if(err){
      res.render("blogs/new");
    } else {
      res.redirect("/blogs");
    }
  });
});

// SHOW ROUTE
router.get("/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if(err){
      res.redirect("/");
    } else {
      res.render("blogs/show", {blog:foundBlog});
    }
  });
});

module.exports = router;
