
angular.module('ngLetusgoApp')
  .controller('addProductCtrl', function ($scope,fromLocal,productManagerService,$location) {
    $scope.allSorts = productManagerService.getAllSort();

    $scope.productInfo = productManagerService.productInfo();
    $scope.addProduct = function(){
      var productInfo = $scope.productInfo;
      var allProducts = fromLocal.getData("allProduct");
      allProducts.push(productInfo);
      fromLocal.setData("allProduct",allProducts);
      $location.path('/productManager');
    }
  });
