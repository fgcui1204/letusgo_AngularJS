'use strict';

describe("addProductCtrl", function () {
  var $scope, fromLocal, productManagerService, $location, createController, allSort,allProduct;
  beforeEach(function () {
    module('ngLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      fromLocal = $injector.get('fromLocal');
      productManagerService = $injector.get('productManagerService');
      $location = $injector.get('$location')
      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('addProductCtrl', {
          $scope: $scope,
          fromLocal: fromLocal,
          $location: $location,
          productManagerService: productManagerService
        });
      };

    });
    allProduct = [
      {p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克'},
      {p_sort: '水果', p_name: '香蕉', p_price: '5', p_unit: '千克'}
    ];
    allSort = ['水果','饮料'];
  });
  it ('it should load all sorts', function () {
    spyOn(productManagerService,'getAllSort').andReturn(allSort);
    createController();
    expect($scope.allSorts).toEqual(allSort);
  });
});
