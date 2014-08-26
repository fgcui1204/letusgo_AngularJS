///**
// * Created by fgcui on 14-8-26.
// */
//function Product(p_sort, p_name, p_price, p_unit) {
//    this.p_sort = p_sort;
//    this.p_name = p_name;
//    this.p_price = p_price;
//    this.p_unit = p_unit;
//}
var app = angular.module('ngLetusgoApp');
app.service('productService', function () {
        return [
        {p_sort:'水果',p_name:'苹果',p_price:'10',p_unit:'千克'},
        {p_sort:'水果',p_name:'香蕉',p_price:'5',p_unit:'千克'},
        {p_sort:'饮料',p_name:'可乐',p_price:'5',p_unit:'瓶'},
        {p_sort:'饮料',p_name:'雪碧',p_price:'3',p_unit:'瓶'},
        {p_sort:'服装',p_name:'NIKE鞋',p_price:'300',p_unit:'双'},
        {p_sort:'服装',p_name:'阿迪T恤',p_price:'200',p_unit:'件'},
    ]
});