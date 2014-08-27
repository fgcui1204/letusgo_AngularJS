/**
 * Created by fgcui on 14-8-27.
 */
var app = angular.module('ngLetusgoApp');
app.service('cartService', function (fromLocal,productService) {
    this.getTotalMoney = function () {
        var cartItem = fromLocal.getData("cartProduct");
        var totalMoney = 0;
        if (cartItem == null) {
            totalMoney = 0;
        } else {
            _.forEach(cartItem, function (item) {
                totalMoney += item.p_price * item.count;
            });
        }
        return totalMoney;
    };
    this.changeCount = function (item){
        var cartItem = fromLocal.getData("cartProduct");
        _.forEach(cartItem, function (cart_item) {
            if (cart_item.p_name == item.p_name) {
                cart_item.count = item.count;
            }
        });
        var cart_Item1 = _.filter(cartItem,function(item){
            return item.count != 0;
        });
        fromLocal.setData("cartProduct",cart_Item1);
         fromLocal.setData("totalCount",productService.getTotalCount());
    }

});