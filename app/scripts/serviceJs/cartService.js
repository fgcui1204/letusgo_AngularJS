/**
 * Created by fgcui on 14-8-27.
 */
var app = angular.module('ngLetusgoApp');
app.service('cartService', function (fromLocal) {
    this.getTotalMoney = function () {
        var cartItem = fromLocal.getData("cartProduct");
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

});