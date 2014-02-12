/*global angular:false, console:false, confirm:false */
(function() {
  'use strict';

  /* Historico Controller */
  /**
   * Dow Says:
   * Esse eh o controller mais pesado por enquanto, mas deve ser simplificado
   */

  //Criando um 'modulo' dos pacientes
  angular.module('scriba.controllers.pacientes', []).
    //Cada controller recebe as dependencia e voce 'injeta' elas na funcao
    //Fica facil testar isso porque pode mock todas dependencias
    //Mas eu nao testei ainda
    controller('HistoricoCtrl', ['$scope', '$routeParams', '$modal','Paciente', 'PacienteExames', 'PacienteExameImagens', function($scope, $routeParams, $modal, Paciente, PacienteExames, PacienteExameImagens) {
      console.log("In HistoricoCtrl");

      /**
       * Dow Says:
       * Buscando informacao usando os servicos, definidos em js/services/pacientes.js
       *  Colocando o resultado em variaveis no $scope, para accessar no view
       */ 
      //O resource criado nao estao muito adquado, voce pode mudar o 'exame' endpoint para retornar informacao do paciente tambem
      //QUando for o o caso, pode 'refactor' essa parte
      $scope.paciente = Paciente.get( { pacienteId : $routeParams.pacienteId });
      $scope.exames = PacienteExames.query( { pacienteId: $routeParams.pacienteId });

      /**
       * Dow Says:
       * Definindo uma funcao nesse scope
       */
      $scope.selecionar = function(exame) {
        console.log("Na funcao 'selecionar' do 'HistoricoCtrl', segue o 'exame' selecionado:");
        console.log(exame);
        //Eu nao consigo fazer as imagens como 'nested' attribute do exame, entao preciso query aqui
        //Muda o API do pacientes/x/exames para retornar um array de imagens junto com o exames na lista e isso vira obsoleto
        exame.imagens = PacienteExameImagens.query({ pacienteId : exame.paciente_id, exameId : exame.id});
        $scope.exameSelecionado = exame;
      };

      $scope.deletar = function(exame) {
        console.log("Na funcao 'deletar' do 'HistoricoCtrl', segue o 'exame' selecionado:");
        console.log(exame);
        if (exame.numero_de_imagens > 0) {
          console.log("exame tem imagens...");
          if(!confirm("Exame tem " + exame.numero_de_imagens + " imagens.\nContinuar?")) {
            console.log("Usuario cancelou deletar");
            return;
          }
          console.log("Usuario aceitou deletar");
        }
        console.log("deletando");
        PacienteExames.delete( { pacienteId: $routeParams.pacienteId, exameId: exame.id }, function() {
          $scope.exames = PacienteExames.query( { pacienteId: $routeParams.pacienteId });
        });
      };

      /**
       * Dow Says:
       * Isso confundi um pouco, mas eh necessario para ter um modal
       * Para acessar o modal, utilize o servico $modal, passe a partial junto com o controller 
       * 
       * o resolve simplesmente 'resolve' as variaveis para injeta no PaxienteExameModalCtrl
       */
      $scope.abrirModal = function(exame) {
        console.log("Na funcao 'abrirModal' do controller 'HistoricoCtrl', segue o exame selecionado:");
        console.log(exame);
        var modalInstance = $modal.open({
          templateUrl: 'partials/pacientes/exameModal.html',
            controller: 'PacienteExameModalCtrl',
            resolve: {
              paciente: function () { return $scope.paciente; },
              exame: function () { return exame; }
            }
        });
        /**
         * Dow Says:
         * Call back then(success, failure)
         * Eu 'refresh' os exames quando o modal completa successfully
         */
        modalInstance.result.then(
            function() {
              console.log("'refreshing' os exames");
              $scope.exames = PacienteExames.query( {pacienteId : $routeParams.pacienteId });
            }, 
            function () {
            }
            );
      };

    }])

    .controller('PacienteExameModalCtrl', ['$scope', '$modalInstance', 'PacienteExames', 'Exames', 'paciente', 'exame', function($scope, $modalInstance, PacienteExames, Exames, paciente, exame) {
      console.log("In 'pacienteExameModalCtrl'");
      $scope.paciente = paciente;
      $scope.exames = Exames.query();
      $scope.modoEditar = (exame !== undefined);
      if ($scope.modoEditar) {
        console.log("Modo editar");
        $scope.exame = exame;
      } else {
        console.log("Modo criar");
        $scope.exame = {};
      }

      $scope.salvar = function () {
        console.log("Na funcao 'salvar' do controller 'PacienteExameModalCtrl'");
        if ($scope.modoEditar) {
          console.log("Editando");
          PacienteExames.update({'pacienteId' : $scope.paciente.id, 'exameId' : $scope.exame.id}, $scope.exame);
        } else {
          console.log("Criando");
          PacienteExames.save({'pacienteId' : $scope.paciente.id}, $scope.exame);
        }
        $modalInstance.close();
      };
      $scope.cancelar = function () {
        console.log("Modal cancelado");
        $modalInstance.dismiss('cancel');
      };
    }])

    //Controller basico para pega a lista de pacientes
    .controller('PacientesCtrl', ['$scope', 'Pacientes', function($scope, Pacientes) {
      console.log("In PacientesCtrl");
      $scope.pacientes = Pacientes.query();
    }]);
}());
