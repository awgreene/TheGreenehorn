var bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    express    = require("express"),
    app        = express(),

mongoose.connect("mongodb://localhost/theGreenehorn");

// Routes
var indexRoutes = require("./routes/index"),
    blogRoutes = require("./routes/blogs");

// App config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);
app.use("/blogs", blogRoutes);

app.listen(3001, "localhost", function() {
  var IP = "localhost";
  var PORT = 3001;
  console.log("The Greenehorn server has started at " + IP + ":" + PORT);
});
