/**
 * Created by fgcui on 14-9-3.
 */
angular.module('ngLetusgoApp')
  .controller('ProductManagerCtrl', function ($scope,fromLocal,productManagerService) {

    $scope.products = productManagerService.productWithSort();

    $scope.delete = function(p_name){
      productManagerService.delete(p_name);
      $scope.products = productManagerService.productWithSort();
    };

    $scope.toAdd = function(){
      productManagerService.toAdd();
    };

    $scope.toUpdate = function(product){
      productManagerService.toUpdate(product);

    };

  });
