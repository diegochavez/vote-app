Meteor.subscribe('Candidatos');
app.controller('VotoCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

  document.addEventListener("deviceready", function () {

$scope.divice = $cordovaDevice.getUUID();

  }, false);

  $scope.candidatos = $meteorCollection(Candidatos);


}]
);