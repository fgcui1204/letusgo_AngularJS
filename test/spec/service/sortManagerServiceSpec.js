describe("sortManagerServiceSpec", function () {
  var fromLocal, sortManagerService, sorts;
  beforeEach(function () {
    module('ngLetusgoApp');

    inject(function ($injector) {
      sortManagerService = $injector.get("sortManagerService");
      fromLocal = $injector.get('fromLocal');
    });
    sorts = [
      {sid: '1', sname: '水果'},
      {sid: '2', sname: '饮料'}
    ];

  });

  it('it should getAllSorts', function () {
    spyOn(fromLocal, 'getData').andReturn(sorts);
    var allSorts = sortManagerService.getAllSorts();
    expect(allSorts.length).toBe(2);
    expect(fromLocal.getData.calls.length).toBe(1);
  });

  it('it should be delete', function () {
    var sort = {sid:'1',sname:'水果'};
    spyOn(fromLocal, 'getData').andReturn(sorts);
    var afterDeleteSort = sortManagerService.delete(sort);
    expect(afterDeleteSort.length).toBe(1);
    expect(fromLocal.getData.calls.length).toBe(1);
  });

  it('if the sort not in sorts ,it should not be deleted', function () {
    var sort = {sid:'3',sname:'服装'};
    spyOn(fromLocal, 'getData').andReturn(sorts);
    var afterDeleteSort = sortManagerService.delete(sort);
    expect(afterDeleteSort.length).toBe(2);
    expect(fromLocal.getData.calls.length).toBe(1);
  });

});
