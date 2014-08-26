function Product(p_sort, p_name, p_price, p_unit) {
    this.p_sort = p_sort;
    this.p_name = p_name;
    this.p_price = p_price;
    this.p_unit = p_unit;
}

angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope,fromLocal) {
        $scope.products = fromLocal.getData("allProduct");
        $scope.$parent.totalCount = getTotalCount();
        $scope.addToCart = function (productItem) {
            var cart_data = fromLocal.getData("cartProduct");
            if (cart_data === null) {
                cart_data = [];
            }
            var cart_item = isExistItem(productItem, cart_data);
            if (cart_item) {
                cart_item.count++;
            } else {
                cart_data.push(new cartItem(productItem, 1));
            }
            fromLocal.setData("cartProduct",cart_data);
            fromLocal.setData("totalCount",getTotalCount());
            $scope.$parent.totalCount = getTotalCount();
        }
    });
function isExistItem(product, cart_data) {
    var item;
    _.forEach(cart_data, function (cartdata) {
        if (product.p_name == cartdata.Product.p_name) {
            item = cartdata;
        } else {
            item = false;
        }
    });
    return item;
}
function getTotalCount() {
    var items = JSON.parse(localStorage.getItem("cartProduct"));
    var totalCount = 0;
    if (items === null) {
        totalCount = 0;
    } else {
        _.forEach(items, function (item) {
            totalCount += item.count
        });
    }
    return totalCount;
}