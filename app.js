/*global require:false, __dirname:false, console:false, process:false*/
var express = require('express');
var app = express();
var pacientes = require('./routes/pacientes.js');
var exames = require('./routes/exames.js');

app.use(express.bodyParser());

app.use(express.static(__dirname + '/app'));

app.get('/', function() {});

app.get('/exames', exames.todos);

app.get('/pacientes', pacientes.todos);
app.get('/pacientes/:pacienteId', pacientes.achar);

app.get('/pacientes/:pacienteId/exames', pacientes.exames);
app.post('/pacientes/:pacienteId/exames', pacientes.criarExame);

app.put('/pacientes/:pacienteId/exames/:exameId', pacientes.editarExame);
app.del('/pacientes/:pacienteId/exames/:exameId', pacientes.deletarExame);

app.get('/pacientes/:pacienteId/exames/:exameId/imagens', pacientes.exameImagens);

console.log("Starting server on 8080");
app.listen(process.env.PORT || 8080);