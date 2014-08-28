'use strict';

/**
 * @ngdoc function
 * @name ngLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngLetusgoApp
 */
angular.module('ngLetusgoApp')
  .controller('MainCtrl', function ($scope,$location,productService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.productList=function(){
        $location.path('/productList');
    };
    $scope.cart=function(){
        $location.path('/cart');
    };
    $scope.homePage=function(){
        $location.path('/homePage');
    };
    $scope.order=function(){
        $location.path('/order');
    };
    $scope.totalCount=productService.getTotalCount();
  });
