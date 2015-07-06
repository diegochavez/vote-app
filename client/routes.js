app.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url : '/',
        templateUrl: 'client/home/view/index.ng.html',
        controller: 'HomeCtrl'
      })
      .state('registro', {
        url : '/registro',
        templateUrl: 'client/registro/view/index.ng.html',
        controller: 'RegistroCtrl'
      })
      .state('voto', {
        url : '/voto',
        templateUrl: 'client/voto/view/index.ng.html',
        controller: 'VotoCtrl'
      })
      .state('tabs', {
        url : '/tabs',
        templateUrl: 'client/index.ng.html',
        controller: 'TodoCtrl'
      });
  }]);

 function onReady() {
    angular.bootstrap(document, ['app.example']);
  }

  if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
  }
  else {
    angular.element(document).ready(onReady);
  }