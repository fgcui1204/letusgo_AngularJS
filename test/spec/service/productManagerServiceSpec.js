/**
 * Created by fgcui on 14-9-11.
 */
describe("productManagerServiceSpec", function () {
  var fromLocal, productManagerService;
  beforeEach(function () {
    module('ngLetusgoApp');

    inject(function ($injector) {
      productManagerService = $injector.get("productManagerService");
      fromLocal = $injector.get('fromLocal');
    });

  });

  it('the getData should be called one and delete product', function () {
    var products = [{p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克'},{p_sort: '水果', p_name: '香蕉', p_price: '10', p_unit: '千克'}];
    var pname = "苹果";
    spyOn(fromLocal, 'getData').andReturn(products);
    productManagerService.delete(pname);
    expect(fromLocal.getData.calls.length).toBe(1);
  });

  it('the length of allsort is 2', function () {
    var allsort = [{sid: '1', sname: '水果'},{sid: '2', sname: '饮料'}];
    spyOn(fromLocal, 'getData').andReturn(allsort);
    productManagerService.getAllSort();
    expect(fromLocal.getData.calls.length).toBe(1);
    expect(allsort.length).toEqual(2);
    expect(allsort[0].sname).toEqual("水果");
  });
});
