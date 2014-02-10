/*global angular:false, console:false, confirm:false */
(function() {
  'use strict';

  /* Historico Controller */

  //Criando um 'modulo' dos pacientes
  angular.module('scriba.controllers.pacientes', []).
    //Cada controller recebe as dependencia e voce 'injeta' elas na funcao
    //Fica facil testar isso porque pode mock todas dependencias
    //Mas eu nao testei ainda
    controller('HistoricoCtrl', ['$scope', '$routeParams', '$modal','Paciente', 'PacienteExames', 'PacienteExameImagens', function($scope, $routeParams, $modal, Paciente, PacienteExames, PacienteExameImagens) {
      console.log("In HistoricoCtrl");
      
      //O resource criado nao estao muito adquado, voce pode mudar o 'exame' endpoint para retornar informacao do paciente tambem
      //QUando for o o caso, pode 'refactor' essa parte
      $scope.paciente = Paciente.get( { pacienteId : $routeParams.pacienteId });
      $scope.exames = PacienteExames.query( { pacienteId: $routeParams.pacienteId });

      $scope.selecionar = function(exame) {
        //Eu nao consigo fazer as imagens como 'nested' attribute do exame, entao preciso query aqui
        //Muda o API do pacientes/x/exames para retornar um array de imagens junto com o exames na lista
        //Tira isso aqui
        exame.imagens = PacienteExameImagens.query({ pacienteId : exame.paciente_id, exameId : exame.id});
        $scope.exameSelecionado = exame;
      };

      $scope.deletar = function(exame) {
        if (exame.numero_de_imagens > 0) {
          if(!confirm("Exame tem " + exame.numero_de_imagens + " imagens.\nContinuar?")) {
            return;
          }
        }
        PacienteExames.delete( { pacienteId: $routeParams.pacienteId, exameId: exame.id }, function() {
          $scope.exames = PacienteExames.query( { pacienteId: $routeParams.pacienteId });
        });
      };

      $scope.abrirModal = function(exame) {
        var modalInstance = $modal.open({
          templateUrl: 'partials/pacientes/exameModal.html',
            controller: 'PacienteExameModalCtrl',
            resolve: {
              paciente: function () { return $scope.paciente; },
              exame: function () { return exame; }
            }
        });
        modalInstance.result.then(
            function() {
              $scope.exames = PacienteExames.query( {pacienteId : $routeParams.pacienteId });
            }, 
            function () {
            }
            );
      };

    }])

    .controller('PacienteExameModalCtrl', ['$scope', '$modalInstance', 'PacienteExames', 'Exames', 'paciente', 'exame', function($scope, $modalInstance, PacienteExames, Exames, paciente, exame) {
      $scope.paciente = paciente;
      $scope.exames = Exames.query();
      $scope.modoEditar = (exame !== undefined);
      if ($scope.modoEditar) {
        $scope.exame = exame;
      } else {
        $scope.exame = {}
      }

      $scope.salvar = function () {
        if ($scope.modoEditar) {
          PacienteExames.update({'pacienteId' : $scope.paciente.id, 'exameId' : $scope.exame.id}, $scope.exame);
        } else {
          PacienteExames.save({'pacienteId' : $scope.paciente.id}, $scope.exame);
        }
        $modalInstance.close();
      };
      $scope.cancelar = function () {
        $modalInstance.dismiss('cancel');
      };
    }])

    //Controller basico para pega a lista de pacientes
    .controller('PacientesCtrl', ['$scope', 'Pacientes', function($scope, Pacientes) {
      console.log("In PacientesCtrl");
      $scope.pacientes = Pacientes.query();
    }]);
}());
