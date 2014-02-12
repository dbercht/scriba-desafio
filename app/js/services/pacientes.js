/* global angular:false */
(function() {
  'use strict';

  /* Paciente Services */

  /**
   * Dow says:
   * Perceba que o js/app.js inclui scriba.services.pacientes como um modulo. Aqui esta definido...
   */

  //Deixa fazer call para url com facilidade sem se preocupar com o asincronismo (Futures, etc)
  //Tem como utilizar esses $resources melhor, mas por enquanto deixo assim para voce brincar
  angular.module('scriba.services.pacientes', []).
  factory('Pacientes', ['$resource', function($resource) {
    /**
     * Dow says:
     * Resource basico.
     * Procure documentacao no angular pelo $resource
     */
    return $resource('/pacientes');
  }]).
  factory('Paciente', ['$resource', function($resource) {
    /**
     * Dow says:
     * Definindo um resource que coloca o attribute 'pacienteId' como o parametro para o URL
     * var pac = { pacienteId : 4}
     * Paciente.get(pac) //procura /pacientes/4
     */
    return $resource('/pacientes/:pacienteId', {pacienteId : '@pacienteId'} );
  }]).
  factory('PacienteExames', ['$resource', function($resource) {
    /**
     * Dow says:
     * Aqui defini umresource com dois parametros para url
     * Tambem defini a funcao 'update' que chama o verbo HTTP PUT
     *
     */
    return $resource('/pacientes/:pacienteId/exames/:exameId', {pacienteId: '@pacienteId', exameId: '@exameId'},
      {
        'update' : { method:'PUT'}
      });
  }]).
  factory('PacienteExameImagens', ['$resource', function($resource) {
    return $resource('/pacientes/:pacienteId/exames/:exameId/imagens', {pacienteId : '@pacienteId', exameId : '@exameId' });
  }]);
}());
