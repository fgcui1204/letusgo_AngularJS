/**
 * Created by fgcui on 14-8-26.
 */
var app = angular.module('ngLetusgoApp');
    app.service('fromLocal', function () {
    this.getData=function(local){
        return JSON.parse(localStorage.getItem(local));
    }
    this.setData=function(key,value){
        localStorage.setItem(key, JSON.stringify(value));
    }
});
