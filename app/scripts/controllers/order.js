/**
 * Created by fgcui on 14-8-25.
 */
angular.module('ngLetusgoApp')
    .controller('OrderCtrl', function ($scope,$location,fromLocal,cartService,productService) {
        $scope.orderItems = fromLocal.getData("cartProduct");
        $scope.$parent.totalCount=productService.getTotalCount();
        $scope.totalMoney = cartService.getTotalMoney();
        $scope.remove = function(){
            localStorage.removeItem("cartProduct");
            fromLocal.setData('totalCount',0);
            $scope.$parent.totalCount=productService.getTotalCount();
            $location.path('/homePage').replace();
        }
    });

