/**
 * Created by fgcui on 14-8-27.
 */
var app = angular.module('ngLetusgoApp');
app.service('orderService', function ($location,fromLocal) {
    this.remove = function(){
        localStorage.removeItem("cartProduct");
        fromLocal.setData('totalCount',0);
        $location.path('/homePage').replace();
    }
});