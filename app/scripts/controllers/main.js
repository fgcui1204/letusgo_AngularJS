'use strict';

/**
 * @ngdoc function
 * @name ngLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngLetusgoApp
 */
angular.module('ngLetusgoApp')
  .controller('MainCtrl', function ($scope, $location, productService) {
    productService.setToLocal();
    productService.setSortToLocal();
    $scope.totalCount = productService.getTotalCount();
  });
