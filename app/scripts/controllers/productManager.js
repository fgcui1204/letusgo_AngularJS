angular.module('ngLetusgoApp')
  .controller('ProductManagerCtrl', function ($scope,fromLocal,productManagerService) {
    $scope.products = fromLocal.getData("allProduct");

    $scope.delete = function(pName){
      var afterDeleteItems = productManagerService.delete(pName);
      fromLocal.setData('allProduct', afterDeleteItems);
      $scope.products = fromLocal.getData("allProduct");
    };

    $scope.toAdd = function(){
      productManagerService.toAdd();
    };

    $scope.toUpdate = function(product){
      productManagerService.toUpdate(product);

    };

  });
