function Product(p_sort,p_name,p_price,p_unit){
    this.p_sort=p_sort;
    this.p_name=p_name;
    this.p_price=p_price;
    this.p_unit=p_unit;
}

angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope) {
         $scope.products = JSON.parse(localStorage.getItem("allProduct"));
         $scope.$parent.totalCount=getTotalCount();
         $scope.addToCart=function(productItem){
             var cart_data = JSON.parse(localStorage.getItem("cartProduct"));
             if(cart_data===null){
                 cart_data=[];
             }
             var cart_item = isExistItem(productItem,cart_data);
             if(cart_item){
                 cart_item.count++;
             }else{
                 cart_data.push(new cartItem(productItem,1));
             }
             localStorage.setItem("cartProduct",JSON.stringify(cart_data));
             localStorage.setItem('totalCount',JSON.stringify(getTotalCount()));
             $scope.$parent.totalCount=getTotalCount();
         }
    });
function isExistItem(product,cart_data) {
    var item;
    for (var i = 0; i < cart_data.length; i++) {
        if (product.p_name == cart_data[i].Product.p_name) {
            item = cart_data[i];
            break;
        } else {
            item=false;
        }
    }
    return item;
}
function getTotalCount(){
    var items=JSON.parse(localStorage.getItem("cartProduct"));
    var totalCount=0;
    if(items===null){
        totalCount=0;
    }else{
        for(var i=0;i<items.length;i++){
            totalCount+=items[i].count;
        }
    }
    return totalCount;
}