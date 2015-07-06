app.controller('HomeCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

  document.addEventListener("deviceready", function () {

$scope.divice = $cordovaDevice.getUUID();

  }, false);

}]
);