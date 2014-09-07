/**
 * Created by fgcui on 14-9-3.
 */
angular.module('ngLetusgoApp').service('productManagerService', function (fromLocal, $location) {

  this.delete = function (product) {
    var items = fromLocal.getData("allProduct");
    var afterDeleteItems = _.filter(items, function (item) {
      return item.p_name != product.p_name;
    });
    fromLocal.setData("allProduct", afterDeleteItems);
  };

  this.productWithSort = function () {
    var items = fromLocal.getData("allProduct");
    var sorts = fromLocal.getData("allSort");
    _.forEach(items, function (item) {
      _.forEach(sorts, function (sort) {
        if (item.p_sort == sort.sid) {
          item.p_sort = sort.sname;
        }
      });
    });
    return items;
  };

  this.toAdd = function () {
    $location.path('/addProduct');
  };

  this.getAllSort = function () {
    var allSort = fromLocal.getData("allSort");
    var sorts = [];
    _.forEach(allSort, function (sort) {
      sorts.push(sort.sname);
    });
    return sorts;
  };

  this.productInfo = function(){
    return {
      p_sort:"",
      p_name:"",
      p_price:"",
      p_unit:""
    }
  };

  this.toUpdate = function(product){
    $location.path('/updateProduct');
  }


});

