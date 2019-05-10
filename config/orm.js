var connection = require("../config/connection");

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ??;', [tableInput], function(err, result){
            if(err) throw err;
            cb(result)
        });
    },

    insert: function(tableInput, colName, id, cb){
        connection.query('INSERT INTO ?? (??) VALUES (?);', [tableInput, colName, id], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    
    update: function(tableInput, colName, colINv, colId, colIdVal){
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tableInput, colName, colINv, colId, colIdVal], function(err, result){
            if(err) throw err;
        });
    },

    delete: function(tableInput, colN, colNv) {
        connection.query('DELETE FROM ?? WHERE ?? = ?;', [tableInput, colN, colNv], function(err, result){
            if (err) throw err;
        });
    }
};

module.exports = orm;
