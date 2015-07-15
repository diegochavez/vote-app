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
        templateUrl: 'client/states/registro/view/registro.ng.html',
        controller: 'RegistroCtrl'
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

 function onReady() {
    angular.bootstrap(document, ['app.voto']);
  }

  if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
  }
  else {
    angular.element(document).ready(onReady);
  }