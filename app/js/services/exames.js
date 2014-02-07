
(function() {
  'use strict';

  /* Paciente Services */

  //$resources eh uma abstracao do $http
  //Deixa fazer call para url com facilidade sem se preocupar com o asincronismo (Futures, etc)
  //Tem como utilizar esses $resources melhor, mas por enquanto deixo assim para voce brincar
  angular.module('scriba.services.exames', []).
  factory('Exames', ['$resource', function($resource) {
    return $resource('/exames');
  }]);
}());
