function Product(p_sort,p_name,p_price,p_unit){
    this.p_sort=p_sort;
    this.p_name=p_name;
    this.p_price=p_price;
    this.p_unit=p_unit;
}
var totalCount=0;
angular.module('ngLetusgoApp')
    .controller('ProCtrl', function ($scope) {
         $scope.products = JSON.parse(localStorage.getItem("allProduct"));
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
             var str = JSON.stringify(cart_data);
             localStorage.setItem("cartProduct",str);
             if($scope.$parent.totalCount==null){
                 $scope.$parent.totalCount=1;
             }else{
                $scope.$parent.totalCount+=1;
             }
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