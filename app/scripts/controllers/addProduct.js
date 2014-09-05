/**
 * Created by fgcui on 14-9-4.
 */
angular.module('ngLetusgoApp')
  .controller('addProductCtrl', function ($scope,fromLocal,productManagerService) {
    $scope.allSorts = productManagerService.getAllSort();
  });
