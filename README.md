# Scriba desafio

Baseado no [Angular-seed](https://github.com/angular/angular-seed/blob/master/README.md)
Com ajuda do [Bootstrap 3.0](http://getbootstrap.com)

## Como comecar

* Instale Postgres 9+ na sua maquina.
* Crie um usuario: scriba com senha: scriba
* Utilize o scripts/scriba.sql para importar o dump num banco novo

### Comecar node


* corra 'npm install' para instalar as dependencias
* corra 'node app.js' para comecar o servidor, o default do porto eh 8080

## Se estiver interessado em escreve/manter testes para o software (recomendado)

### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

We recommend using [protractor](https://github.com/angular/protractor) for end-to-end tests. It
uses native events and has special features for Angular applications.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run:
  * run the tests from console with [Protractor](https://github.com/angular/protractor) via
    `scripts/e2e-test.sh` (on windows: `scripts\e2e-test.bat`)


## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers/    --> Contem o diretorio com controllers especializados
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        sevices/        --> Contem o diretorio com servicos especializados
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    utils/              --> Contem utilidades para o backend servidor
    routes/             --> Contem a logica dos servicos
    app.js              --> Contem o servidor node

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/protractor-conf.js    --> config file for running e2e tests with Protractor

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/
