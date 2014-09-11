/**
 * Created by fgcui on 14-9-11.
 */
angular.module('ngLetusgoApp')
  .controller('updateSort', function ($scope,fromLocal,sortManagerService,$routeParams,$location) {
    $scope.sort = sortManagerService.getSortById($routeParams.sid)[0];

    $scope.doUpdate = function(){
      sortManagerService.doUpdate($scope.sort);
      $location.path('/sortManager');
    }
  });
