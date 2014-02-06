(function() {
  'use strict';

  /* Paciente Services */

  //$resources eh uma abstracao do $http
  //Deixa fazer call para url com facilidade sem se preocupar com o asincronismo (Futures, etc)
  //Tem como utilizar esses $resources melhor, mas por enquanto deixo assim para voce brincar
  angular.module('scriba.services.pacientes', []).
  factory('Pacientes', ['$resource', function($resource) {
    return $resource('/pacientes');
  }]).
  factory('Paciente', ['$resource', function($resource) {
    return $resource('/pacientes/:pacienteId', {pacienteId : '@pacienteId'} );
  }]).
  factory('PacienteExames', ['$resource', function($resource) {
    return $resource('/pacientes/:pacienteId/exames', {pacienteId: '@pacienteId'});
  }]).
  factory('PacienteExameImagens', ['$resource', function($resource) {
    return $resource('/pacientes/:pacienteId/exames/:exameId/imagens', {pacienteId : '@pacienteId', exameId : '@exameId' });
  }]);
}());
