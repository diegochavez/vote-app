app.controller('HomeCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

$scope.votantes = $meteorCollection(Votantes);

  document.addEventListener("deviceready", function () {

$scope.device = $cordovaDevice.getUUID();

  }, false);

//   $scope.deviceExist = function(){
//   	var result = $meteor.call('getDeviceID', '41BF9507-9940-4211-8A1B-A02352FE4132')
//   	.then(function(data){

//   	},function(err){
  		
//   	});
// 	console.log(results);
// 	return result;
// };

}]
);