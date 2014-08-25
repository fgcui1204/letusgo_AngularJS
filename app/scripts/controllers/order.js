/**
 * Created by fgcui on 14-8-25.
 */
angular.module('ngLetusgoApp')
    .controller('OrderCtrl', function ($scope) {
        $scope.orderItems = JSON.parse(localStorage.getItem("cartProduct"));
    });

