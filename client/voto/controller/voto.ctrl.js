app.controller('VotoCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

  document.addEventListener("deviceready", function () {

$scope.divice = $cordovaDevice.getUUID();

  }, false);

  $scope.candidatos = 
  	[
  	{
  		'partido_politico':'Viva',
  		'candidatos' : 
  			[
  			{
  				'nombre':'Zury Rios Sosa',
  				'puesto' : 'Presidencia'
  			},
  			{
  				'nombre':'Veneno Cruz',
  				'puesto' : 'Alcaldía',
  				'departamento' : 'Guatemala',
  				'municipio': 'Guatemala Ciudad Capital'
  			}
  			]
  	}
  	];
  

}]
);