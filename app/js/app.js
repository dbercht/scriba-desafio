'use strict';


// Declare app level module which depends on filters, and services
angular.module('scriba', [
  'ngRoute',
  'ngResource',
  'scriba.filters',
  'scriba.services',
  'scriba.services.pacientes',
  'scriba.directives',
  'scriba.controllers',
  'scriba.controllers.pacientes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pacientes', {templateUrl: 'partials/pacientes/lista.html', controller: 'PacientesCtrl'});
  $routeProvider.when('/pacientes/:pacienteId', {templateUrl: 'partials/pacientes/historico.html', controller: 'HistoricoCtrl'});
  $routeProvider.otherwise({redirectTo: '/pacientes'});
}]);
