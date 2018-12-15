// Import MySQL connection.
var connection = require("../config/connection.js");

// Commands for controllers
var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
          if (err) throw err;
          console.table(result);
          cb(result);
        });
    },
    insert: function(tableName, colName, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, vals], function(err, result) {
            if (err) throw err;
            console.log("Inserted row");
            cb(result);
        })
    },
    update: function(tableName, condition, cb) {
        var queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [tableName, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
};

// Export ORM
module.exports = orm;