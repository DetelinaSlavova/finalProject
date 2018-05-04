app.service('productService',function($http){
    this.getTvs = (type) => $http.get('http://localhost:3000/TvVideoGaming?type=' + type);
    this.cartProduct = function(){ 
        var productForBuy = [];
        console.log(productForBuy);
        return productForBuy
        }
});