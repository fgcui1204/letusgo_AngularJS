angular.module('ngLetusgoApp')
    .controller('CartCtrl', function ($scope) {
        $scope.cartItems = JSON.parse(localStorage.getItem("cartProduct"));
        $scope.changeCount = function(){
            //$scope.perMoney=;
        }
    });

