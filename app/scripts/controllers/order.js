/**
 * Created by fgcui on 14-8-25.
 */
angular.module('ngLetusgoApp')
    .controller('OrderCtrl', function ($scope,$location,getFromLocal) {
        $scope.orderItems = getFromLocal.data("cartProduct");
        $scope.$parent.totalCount=getTotalCount();
        $scope.totalMoney = getTotalMoney();
        $scope.remove = function(){
            localStorage.removeItem("cartProduct");
            localStorage.setItem("totalCount",0);
            $scope.$parent.totalCount=getTotalCount();
            $location.path('/homePage').replace();
        }
    });

