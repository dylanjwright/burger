// Importing the orm.js file
var orm = require("../config/orm");

var burger = {
	select: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	insert: function(col, val, cb) {
    orm.insert("burgers", col, val, function(res) {
      cb(res);
    });
  },
  	update: function(objColVal, condition, cb) {
    orm.update("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;