angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope,fromLocal,productService) {


        $scope.products = fromLocal.getData("allProduct");

        $scope.$parent.totalCount = productService.getTotalCount();

        $scope.addToCart = function(product){
            productService.addToCart(product);
            $scope.$parent.totalCount = productService.getTotalCount();
        };
    });
