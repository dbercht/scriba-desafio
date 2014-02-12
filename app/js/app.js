/* global angular:false */

(function(){
  'use strict';
  /**
   * Dow says:
   * aqui se defini todas 'dependencias' do angular
   *
   * veja a dependencia scriba.controllers.pacientes (js/controllers/pacientes.js) e scriba.services.pacientes (js/services/pacientes.js)
   */

  // Declare app level module which depends on filters, and services
  angular.module('scriba', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'scriba.filters',
    'scriba.services',
    'scriba.services.pacientes',
    'scriba.services.exames',
    'scriba.directives',
    'scriba.controllers',
    'scriba.controllers.pacientes'
    ]).
    /**
     * Dow says:
     *
     * Aqui se defini os 'routes' do cliente e que deveria ser loaded para apresentar tal view...
     *
     * etc...
     */
    config(['$routeProvider', function($routeProvider) {
      /**
       * Dow says:
       *
       * e.g. #/pacientes abre o template partials/pacientes/lista.html e o controller PacientesCtrl
       */
      $routeProvider.when('/pacientes', {templateUrl: 'partials/pacientes/lista.html', controller: 'PacientesCtrl'});
      /**
       * Dow says:
       *  
       * :pacienteId defini um parametro, acessavel via o servico $routeParams no controller
       */
      $routeProvider.when('/pacientes/:pacienteId', {templateUrl: 'partials/pacientes/historico.html', controller: 'HistoricoCtrl'});
      $routeProvider.otherwise({redirectTo: '/pacientes'});
    }]);
}());
