var express = require('express');
var app = express();
var router = express.Router();
var burger = require('../models/burger');
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defualtLayout: "main"}));
app.set('view engine', 'handlebars');

router.get("/", function(req, res) {
	burger.select(function(data) {
		var burgerObj = {
			burger: data
		};
		console.log(burgerObj);
		res.render("index", burgerObj);
	});
});

router.post("/", function(req, res) {
	burger.insert(
	    ["burger_name"], [req.body.burger_name], function() {
	    res.redirect("/");
  	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;