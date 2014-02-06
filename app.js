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
app.get('/pacientes/:pacienteId/exames/:exameId/imagens', pacientes.exameImagens);

console.log("Starting server on 8080");
app.listen(process.env.PORT || 8080);