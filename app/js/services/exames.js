
(function() {
  'use strict';

  /* Paciente Services */

  //$resources eh uma abstracao do $http
  //Deixa fazer call para url com facilidade sem se preocupar com o asincronismo (Futures, etc)
  //Tem como utilizar esses $resources melhor, mas por enquanto deixo assim para voce brincar
  angular.module('scriba.services.exames', []).
  /**
   * Dow says:
   *
   * Definindo um 'factory' chamado 'Exames', injetando o $resource  (providenciado pelo angular) para fazer REST calls.
   *
   */
  factory('Exames', ['$resource', function($resource) {
    /**
     * Dow says:
     * Exames.query() vai fazer um GET para <url do aplicativo>/exames
     * retornar todos exames (tipos) definidos
     */
    return $resource('/exames');
  }]);
}());
