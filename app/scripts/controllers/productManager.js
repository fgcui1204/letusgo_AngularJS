/**
 * Created by fgcui on 14-9-3.
 */
angular.module('ngLetusgoApp')
  .controller('ProductManagerCtrl', function ($scope,fromLocal,productManagerService) {

    $scope.products = productManagerService.productWithSort();

    $scope.delete = function(product){
      productManagerService.delete(product);
      $scope.products = productManagerService.productWithSort();
    };

    $scope.toAdd = function(){
      productManagerService.toAdd();
    };

    $scope.toUpdate = function(product){
      productManagerService.toUpdate(product);
      $scope.productInfo = {p_sort:product.p_sort,p_name:product.p_name,p_price:product.p_price,p_unit:product.p_unit};
      console.log($scope.productInfo);
    };

  });
