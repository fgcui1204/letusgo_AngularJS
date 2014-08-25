'use strict';

/**
 * @ngdoc overview
 * @name ngLetusgoApp
 * @description
 * # ngLetusgoApp
 *
 * Main module of the application.
 */
angular
  .module('ngLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/homePage', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/productList',{
            templateUrl: 'views/product.html',
            controller: 'ProCtrl'
      })
      .when('/cart',{
         templateUrl: 'views/cart.html',
         controller: 'CartCtrl'
      })
      .when('/order',{
            templateUrl: 'views/order.html',
            controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
