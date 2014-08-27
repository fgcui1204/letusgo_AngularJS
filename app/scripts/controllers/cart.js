function cartItem(Product, count) {
    this.Product = Product;
    this.count = count;
}
angular.module('ngLetusgoApp')
    .controller('CartCtrl', function ($scope,fromLocal,cartService,productService) {
        var cartItem = fromLocal.getData("cartProduct");
        $scope.cartItems = cartItem;
        $scope.$parent.totalCount = productService.getTotalCount();
        $scope.totalMoney = cartService.getTotalMoney();
        $scope.changeCount = function (item) {
            _.forEach(cartItem, function (cart_item) {
                if (cart_item.Product.p_name == item.Product.p_name) {
                    cart_item.count = item.count;
                }
            });
            var cart_Item1 = _.filter(cartItem,function(item){
                return item.count != 0;
            });
            fromLocal.setData("cartProduct",cart_Item1);
            $scope.cartItems = cart_Item1;
            fromLocal.setData("totalCount",productService.getTotalCount());
            $scope.totalMoney = cartService.getTotalMoney();
            $scope.$parent.totalCount = productService.getTotalCount();
        }
    });
