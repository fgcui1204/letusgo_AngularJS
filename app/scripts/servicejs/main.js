function loadAllProduct() {
    return [
        new Product('水果', '苹果', '10', '千克'),
        new Product('水果', '香蕉', '5', '千克'),
        new Product('饮料', '雪碧', '5', '瓶'),
        new Product('饮料', '可乐', '7', '瓶'),
        new Product('水果', '橙子', '10', '千克'),
        new Product('衣服', '阿迪运动鞋', '1000', '双'),
        new Product('衣服', 'NIKE运动鞋', '1000', '双')
    ];
}
var allProduct=JSON.stringify(loadAllProduct());
localStorage.setItem('allProduct',allProduct);