function Product(p_sort, p_name, p_price, p_unit) {
    this.p_sort = p_sort;
    this.p_name = p_name;
    this.p_price = p_price;
    this.p_unit = p_unit;
}

angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope,fromLocal,productService) {
        productService.setToLocal();
        $scope.products = fromLocal.getData("allProduct");
        $scope.$parent.totalCount = productService.getTotalCount();
        $scope.addToCart = function(product){
            productService.addToCart(product);
            $scope.$parent.totalCount = productService.getTotalCount();
        };
    });
