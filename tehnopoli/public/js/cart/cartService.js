app.service('cartService',function($http){
    this.getCartProduct = () => $http.get('http://localhost:3000/cart');
    // this.getCart = function(){
    //     var data = localStorage.getItem('$scope.productForBuy');
    //     var datas = JSON.parse(data);
    //     return datas
    // }
});