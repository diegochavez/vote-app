app.controller('AboutCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
        function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice,$state) {

            document.addEventListener("deviceready", function () {
                $scope.divice = $cordovaDevice.getUUID();
            }, false);

            $scope.onDragRight = function(){
                $state.go('about');
            }

        }]
);