/*global require:false, exports:false*/

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

var queryCriarExame = "INSERT " +
                        "INTO  tbl_pac_exames (paciente_id, exame_id, dia, peso, altura, laudo)" +
                        "VALUES    ($1, $2, $3, $4, $5, $6)";
                        
var queryEditarExame = "UPDATE tbl_pac_exames " +
                        "SET (exame_id, peso, altura, laudo)" +
                        " = ($3, $4, $5, $6) " +
                        " where tbl_pac_exames.paciente_id = $1 AND tbl_pac_exames.id = $2";

var queryDeletarExame = "DELETE " +
                        "FROM     tbl_pac_exames pe " +
                        "WHERE    pe.paciente_id = $1 AND pe.id = $2";

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
          res.send(404, { erro: "Paciente nao encontrado"});
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

exports.criarExame = function(req, res) {
  console.log(req.body);
  pgUtil.query (res,
      { 
        name : "criar_paciente_exame", 
        text : queryCriarExame,
        values : [
          req.params.pacienteId, 
          req.body.exame_id, 
          req.body.dia, 
          req.body.peso, 
          req.body.altura, 
          req.body.laudo
        ]
      }, 
      function() {
        res.send(201);
      });
};

exports.editarExame = function(req, res) {
  pgUtil.query (res,
      { 
        name : "editar_paciente_exame", 
        text : queryEditarExame,
        values : [
          req.params.pacienteId, 
          req.params.exameId,
          req.body.exame_id, 
          req.body.peso, 
          req.body.altura, 
          req.body.laudo,
        ]
      }, 
      function() {
        res.send(200);
      });
};

exports.deletarExame = function(req, res) {
  pgUtil.query (res,
      { 
        name : "deletar_paciente_exame", 
        text : queryDeletarExame,
        values : [req.params.pacienteId, req.params.exameId]
      }, 
      function() {
        res.send(200);
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


