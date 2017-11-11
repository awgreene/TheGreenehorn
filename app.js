var bodyParser = require("body-parser"),
    express    = require("express"),
    app        = express();

// Routes
var indexRoutes = require("./routes/index");

// App config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);

app.listen(3001, "0.0.0.0", function() {
  var IP = "0.0.0.0";
  var PORT = 3001;
  console.log("The Greenehorn server has started at " + IP + ":" + PORT);
});
