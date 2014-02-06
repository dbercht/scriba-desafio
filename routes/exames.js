var pgUtil = require('../utils/pg_utils.js');

var queryTodos = "SELECT *" +
               " FROM tbl_exames";

exports.todos = function(req, res) {
  pgUtil.query (res,
      { 
        name : "todos_exames", 
        text : queryTodos,
        values : []
      }, 
      function(result) {
        res.send(result.rows);
      });
};
