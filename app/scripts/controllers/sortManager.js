/**
 * Created by fgcui on 14-9-7.
 */
angular.module('ngLetusgoApp')
  .controller('sortManagerCtrl', function ($scope,fromLocal,sortManagerService) {
    $scope.sorts = sortManagerService.getAllSorts();
    $scope.addSort = function(){
      var sort = $scope.sort;
      var allSort = fromLocal.getData("allSort");
      allSort.push(sort);
      fromLocal.setData("allSort",allSort);
      $location.path('/sortManager');
    };

    $scope.delete = function(sort){
      sortManagerService.delete(sort);
      $scope.sorts = sortManagerService.getAllSorts();
    }
  });
