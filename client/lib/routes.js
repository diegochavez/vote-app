app.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl: 'client/states/home/view/home.ng.html',
        controller: 'HomeCtrl'
      })
      .state('registro', {
        url : '/registro',
        templateUrl: 'client/states/registro/view/registro.home.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step1', {
        url : '/registro-step1',
        templateUrl: 'client/states/registro/view/registro.step1.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step2', {
        url : '/registro-step2',
        templateUrl: 'client/states/registro/view/registro.step2.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step3', {
        url : '/registro-step3',
        templateUrl: 'client/states/registro/view/registro.step3.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step4', {
        url : '/registro-step4',
        templateUrl: 'client/states/registro/view/registro.step4.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step5', {
        url : '/registro-step5',
        templateUrl: 'client/states/registro/view/registro.step5.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('registro_step6', {
        url : '/registro-step6',
        templateUrl: 'client/states/registro/view/registro.step6.ng.html',
        controller: 'RegistroHomeCtrl'
      })
      .state('voto', {
        url : '/voto',
        templateUrl: 'client/states/voto/view/voto.ng.html',
        controller: 'VotoCtrl'
      })
      .state('about', {
        url : '/about',
        templateUrl: 'client/states/about/view/about.ng.html',
        controller: 'AboutCtrl'
      });
  }]);

app.run(['$rootScope', function ($rootScope) {

    $rootScope.votante = { 
        deviceID: '',
        sexo: '',
        edad: '',
        escolaridad : '',
        departamento: '',
        municipio: '',
        paso : ''
      };

    $rootScope.$on('$routeChangeStart', function (next, current) {

    });
}]);

 function onReady() {
    angular.bootstrap(document, ['app.voto']);
  }

  if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
  }
  else {
    angular.element(document).ready(onReady);
  }