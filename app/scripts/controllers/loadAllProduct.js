function Product(p_sort, p_name, p_price, p_unit) {
    this.p_sort = p_sort;
    this.p_name = p_name;
    this.p_price = p_price;
    this.p_unit = p_unit;
}

angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope,fromLocal,productService) {
        $scope.products = fromLocal.getData("allProduct");
        $scope.$parent.totalCount = productService.getTotalCount();
        $scope.addToCart = function (productItem) {
            var cart_data = fromLocal.getData("cartProduct");
            if (cart_data === null) {
                cart_data = [];
            }
            var cart_item = productService.isExistItem(productItem, cart_data);
            if (cart_item) {
                cart_item.count++;
            } else {
                cart_data.push(new cartItem(productItem, 1));
            }
            fromLocal.setData("cartProduct",cart_data);
            fromLocal.setData("totalCount",productService.getTotalCount());
            $scope.$parent.totalCount = productService.getTotalCount();
        }
    });
