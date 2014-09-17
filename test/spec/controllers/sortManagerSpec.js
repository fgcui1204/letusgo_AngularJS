'use strict'
describe("sortManagerCtrl",function() {
  var $scope, fromLocal, sortManagerService, $location, createController, allSort;
  beforeEach(function () {
    module('ngLetusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      fromLocal = $injector.get('fromLocal');
      sortManagerService = $injector.get('sortManagerService');
      $location = $injector.get('$location')
      var $controller = $injector.get('$controller');

      createController = function () {
        return $controller('sortManagerCtrl', {
          $scope: $scope,
          fromLocal: fromLocal,
          $location: $location,
          sortManagerService: sortManagerService
        });
      };

    });
    allSort = [
      {sid: '1', sname: '水果'},
      {sid: '2', sname: '饮料'}
    ];
  });

  it ('it should load all sort', function () {
    spyOn(fromLocal,'getData').andReturn(allSort);
    createController();
    expect($scope.sorts).toEqual(allSort);
  });
});
