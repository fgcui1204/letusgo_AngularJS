/**
 * Created by fgcui on 14-8-25.
 */
angular.module('ngLetusgoApp')
    .controller('OrderCtrl', function ($scope,$location,fromLocal) {
        $scope.orderItems = fromLocal.getData("cartProduct");
        $scope.$parent.totalCount=getTotalCount();
        $scope.totalMoney = getTotalMoney();
        $scope.remove = function(){
            localStorage.removeItem("cartProduct");
            fromLocal.setData('totalCount',0);
            $scope.$parent.totalCount=getTotalCount();
            $location.path('/homePage').replace();
        }
    });

