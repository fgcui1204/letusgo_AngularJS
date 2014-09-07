/**
 * Created by fgcui on 14-9-7.
 */
angular.module('ngLetusgoApp').service('sortManagerService', function (fromLocal) {
  this.getAllSorts = function (){
    return fromLocal.getData("allSort");
  };

  this.delete = function(sort){
    var allSorts = fromLocal.getData("allSort");
    var afterDeleteSorts = _.filter(allSorts, function (sorts) {
      return sorts.sname != sort.sname;
    });
    fromLocal.setData("allSort",afterDeleteSorts);
  };
});
