var pgUtil = require('../utils/pg_utils.js');

var queryTodos = "SELECT *" +
               " FROM tbl_pacientes";
var queryAchar = queryTodos + " WHERE id = $1";

var queryExames = "SELECT          pe.id, e.titulo, pe.paciente_id, pe.exame_id, pe.dia, pe.peso, pe.altura, pe.laudo, count(pef) as numero_de_imagens " +
                  "FROM            tbl_pac_exames pe " +
                  "INNER JOIN      tbl_exames e            ON e.id = pe.exame_id " +
                  "LEFT OUTER JOIN tbl_pac_exame_fotos pef ON pef.paciente_id = pe.paciente_id AND pef.exame_id = pe.id " +
                  "WHERE           pe.paciente_id=$1" +
                  "GROUP BY        pe.id, e.titulo, pe.paciente_id, pe.exame_id, pe.dia, pe.peso,pe.altura, pe.laudo " +
                  "ORDER BY        pe.dia DESC";
                  
var queryExameImagens = "SELECT   * "  +
                        "FROM     tbl_pac_exame_fotos pef " +
                        "WHERE    pef.paciente_id=$1 AND pef.exame_id =$2 " +
                        "ORDER BY pef.dia ASC";

exports.todos = function(req, res) {
  pgUtil.query (res,
      { 
        name : "todos_pacientes", 
        text : queryTodos,
        values : []
      }, 
      function(result) {
        res.send(result.rows);
      });
};

exports.achar = function(req, res) {
  pgUtil.query (res,
      { 
        name : "achar_paciente", 
        text : queryAchar,
        values : [req.params.pacienteId]
      }, 
      function(result) {
        if (result.rows.length < 1) {
          res.send(404);
        }
        res.send(result.rows[0]);
      });
};

exports.exames = function(req, res) {
  pgUtil.query (res,
      { 
        name : "paciente_exames", 
        text : queryExames,
        values : [req.params.pacienteId]
      }, 
      function(result) {
        res.send(result.rows);
      });
};

exports.exameImagens = function(req, res) {
  pgUtil.query (res,
      { 
        name : "paciente_exame_imagens", 
        text : queryExameImagens,
        values : [req.params.pacienteId, req.params.exameId]
      }, 
      function(result) {
        res.send(result.rows);
      });
};


