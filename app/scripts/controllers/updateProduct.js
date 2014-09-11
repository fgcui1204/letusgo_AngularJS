/**
 * Created by fgcui on 14-9-7.
 */
angular.module('ngLetusgoApp')
  .controller('updateProduct', function ($scope,fromLocal,productManagerService,$routeParams,$location) {
    $scope.allSorts = productManagerService.getAllSort();
    var item = productManagerService.getProductByName($routeParams.name);
    $scope.productInfo = {'p_sort':item[0].p_sort,p_name:item[0].p_name,p_price:item[0].p_price,p_unit:item[0].p_unit};

    $scope.doUpdate = function(){
      productManagerService.delete($scope.productInfo.p_name);
      var allProducts = fromLocal.getData("allProduct");
      allProducts.push($scope.productInfo);
      fromLocal.setData("allProduct",allProducts);
      $location.path('/productManager');
    }
  });
