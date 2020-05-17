var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.All('burgers', function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
