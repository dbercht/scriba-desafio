/*global angular:false */
(function() {
'use strict';

/* Filters */

angular.module('scriba.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
/**
 * Dow Says:
 * filtro 'idade' pode ser utilizado nos views como
 * {{ variavel | idade }}
 */
  .filter('idade', [function() {
    return function(birthday) {
        return ~~((Date.now() - new Date(birthday)) / (31557600000));
    };
  }])
  .filter('imagem_diretorio', [function() {
    return function(imagem) {
      var str =  '/img/pacientes/' + imagem.paciente_id + '/exames/' + imagem.exame_id + '/' + imagem.foto_loc;
      return str;
    };
  }]);
}());
