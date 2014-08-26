/**
 * Created by fgcui on 14-8-26.
 */
var app = angular.module('ngLetusgoApp');
app.service('getFromLocal', function () {
    this.data=function(local){
        return JSON.parse(localStorage.getItem(local));
    }
});
