var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },
    insert: function(colName, vals, cb) {
        orm.insert("burger", colName, vals, function(res) {
            cb(res);
        });
    },
    update: function(condition, cb) {
        orm.update("burger", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;