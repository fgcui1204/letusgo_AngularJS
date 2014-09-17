'use strict';

describe("ProductManagerCtrl",function() {
  var $scope, fromLocal, productManagerService, createController,allProduct;
  beforeEach(function () {
    module('ngLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      fromLocal = $injector.get('fromLocal');
      productManagerService = $injector.get('productManagerService');
      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('ProductManagerCtrl', {
          $scope: $scope,
          fromLocal: fromLocal,
          productManagerService: productManagerService
        });
      };

    });
    allProduct = [
      {p_sort:'水果',p_name:'苹果',p_price:'10',p_unit:'千克'},
      {p_sort:'水果',p_name:'香蕉',p_price:'5',p_unit:'千克'}
    ];
  });
  it ('it should load all product', function () {
    spyOn(fromLocal,'getData').andReturn(allProduct);
    createController();
    expect($scope.products).toEqual(allProduct);
  });
});
