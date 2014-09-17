angular.module('ngLetusgoApp').service('cartService', function (fromLocal, productService) {
  this.cartItemCountNotZero = [];

  this.getTotalMoney = function () {
    var cartItem = fromLocal.getData('cartProduct');
    var totalMoney = 0;
    if (cartItem !== null) {
      _.forEach(cartItem, function (item) {
        totalMoney += item.p_price * item.count;
      });
    }
    return totalMoney;
  };

  this.changeCount = function (item) {
    var cartItem = fromLocal.getData('cartProduct');
    this.cartItemCountNotZero = [];
    _.forEach(cartItem, function (items) {
      if (items.p_name == item.p_name) {
        items.count = item.count;
      }
    });

    this.cartItemCountNotZero = _.filter(cartItem, function (item) {
      return item.count != 0;
    });

    fromLocal.setData('cartProduct', this.cartItemCountNotZero);
    fromLocal.setData('totalCount', productService.getTotalCount());
  };

});
