//model
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var traveller = {

  all: function (cb) {
    orm.all("USERATTR", function (res) {
      cb(res);
    });
  },

  usersearch: function (user,cb) {
    orm.usersearch("USERATTR", user, function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("USERATTR", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("USERATTR", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("USERATTR", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = traveller;