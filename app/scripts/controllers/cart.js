function cartItem(Product, count) {
    this.Product = Product;
    this.count = count;
}
angular.module('ngLetusgoApp')
    .controller('CartCtrl', function ($scope,fromLocal) {
        var cartItem = fromLocal.getData("cartProduct");
        $scope.cartItems = cartItem;
        $scope.$parent.totalCount = getTotalCount();
        $scope.totalMoney = getTotalMoney();
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
            fromLocal.setData("totalCount",getTotalCount());
            $scope.totalMoney = getTotalMoney();
            $scope.$parent.totalCount = getTotalCount();
        }
    });
function getTotalMoney() {
    var cartItem = JSON.parse(localStorage.getItem("cartProduct"));
    var totalMoney = 0;
    if (cartItem == null) {
        totalMoney = 0;
    } else {
        _.forEach(cartItem, function (item) {
            totalMoney += item.Product.p_price * item.count;
        });
    }

    return totalMoney;
}
