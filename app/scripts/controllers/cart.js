function cartItem(Product,count){
    this.Product=Product;
    this.count=count;
}
angular.module('ngLetusgoApp')
    .controller('CartCtrl', function ($scope) {
        var cartItem=JSON.parse(localStorage.getItem("cartProduct"));
        $scope.cartItems = cartItem;
        $scope.$parent.totalCount=getTotalCount();
        $scope.totalMoney = getTotalMoney();
        $scope.changeCount = function(item){
            for(var i=0;i<cartItem.length;i++){
               if(cartItem[i].Product.p_name==item.Product.p_name){
                   cartItem[i].count=item.count;
                 }
            }
            localStorage.setItem("cartProduct",JSON.stringify(cartItem));
            localStorage.setItem('totalCount',JSON.stringify(getTotalCount()));
            $scope.totalMoney = getTotalMoney();
            $scope.$parent.totalCount=getTotalCount();
        }



    });
function getTotalMoney(){
    var cartItem=JSON.parse(localStorage.getItem("cartProduct"));
    var totalMoney=0;
    if(cartItem == null){
        totalMoney = 0;
    }else{
        _.forEach(cartItem,function(item){
            totalMoney+=item.Product.p_price*item.count;
        });
//       for (var i = 0; i < cartItem.length; i++) {
//        totalMoney+=cartItem.Product.p_price*cartItem.count;
//        }
    }

    return totalMoney;
}
