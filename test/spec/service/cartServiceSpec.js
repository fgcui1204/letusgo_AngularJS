/**
 * Created by fgcui on 14-8-28.
 */
describe("CartService", function () {
  var cartService,fromLocal, productService;
  beforeEach(function () {
    module('ngLetusgoApp');

    inject(function ($injector) {
      cartService = $injector.get("cartService");
      productService = $injector.get("productService");
      fromLocal = $injector.get('fromLocal');
    });

  });
  it('total money should be 0',function(){
    spyOn(fromLocal,'getData').andReturn(null);
    var totalMoney = cartService.getTotalMoney();
    expect(fromLocal.getData.calls.length).toBe(1);
    expect(totalMoney).toEqual(0);
  });

  it('total money should be 29',function(){
    var cartItem = [{p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克', count: 2},{p_sort:'饮料',p_name:'雪碧',p_price:'3',p_unit:'瓶', count: 3}];
    spyOn(fromLocal,'getData').andReturn(cartItem);
    var totalMoney = cartService.getTotalMoney();
    expect(fromLocal.getData.calls.length).toBe(1);
    expect(totalMoney).toEqual(29);
  });

  it('when change the count in cart the setData should be called',function(){
    var cartItem = [{p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克', count: 3},{p_sort:'饮料',p_name:'雪碧',p_price:'3',p_unit:'瓶', count: 3}];
    var item = {p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克',count: 4};
    spyOn(fromLocal,'getData').andReturn(cartItem);
    spyOn(fromLocal,'setData');
    cartService.changeCount(item);
    expect(fromLocal.setData.calls.length).toBe(2);
    expect(fromLocal.getData.calls.length).toBe(2);
    expect(cartItem[0].count).toEqual(4);
  });

  it('when the count is 0,cartProduct should delete this product',function(){
    var cartItem = [{p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克', count: 1},{p_sort:'饮料',p_name:'雪碧',p_price:'3',p_unit:'瓶', count: 3}];
    var item = {p_sort: '水果', p_name: '苹果', p_price: '10', p_unit: '千克',count: 0};
    spyOn(fromLocal,'getData').andReturn(cartItem);
    spyOn(fromLocal,'setData');
    cartService.changeCount(item);
    expect(cartService.cart_Item_count_not_0.length).toEqual(1);
    expect(fromLocal.setData.calls.length).toBe(2);
    expect(fromLocal.getData.calls.length).toBe(2);
  });
});
