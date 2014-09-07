/**
 * Created by fgcui on 14-9-3.
 */
angular.module('ngLetusgoApp')
  .controller('ProductManagerCtrl', function ($scope,fromLocal,productManagerService) {

    $scope.products = productManagerService.productWithSort();

    $scope.delete = function(product){
      productManagerService.delete(product);
      $scope.products = productManagerService.productWithSort();
    }

    $scope.toAdd = function(){
      productManagerService.toAdd();
    }

  });
