app.controller('HomeCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

$scope.votantes = $meteorCollection(Votantes);

  document.addEventListener("deviceready", function () {

$scope.device = $cordovaDevice.getUUID();

  }, false);

  $scope.deviceExist = function(){
  	var result = Meteor.call('getDeviceID', '41BF9507-9940-4211-8A1B-A02352FE4132');
	console.log(result);
	return result;
};

}]
);