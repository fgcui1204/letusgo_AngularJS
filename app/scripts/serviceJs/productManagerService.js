/**
 * Created by fgcui on 14-9-3.
 */
angular.module('ngLetusgoApp').service('productManagerService', function (fromLocal,$location) {

  this.delete = function(product){
    var items = fromLocal.getData("allProduct");
    var afterDeleteItems = _.filter(items,function(item){
      return item.p_name != product.p_name;
    });
    fromLocal.setData("allProduct",afterDeleteItems);
  }
  this.toAdd = function(){
    $location.path('/addProduct');{}
  }
  this.getAllSort = function(){
    console.log("333333333");
    var items = fromLocal.getData("allProduct");
    var allSort = _.map(items,'p_sort');
    console.log(allSort);
    return allSort;
  }

});

