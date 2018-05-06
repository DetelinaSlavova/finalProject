app.controller('productController', function ($scope, $routeParams, $location, productService) {
    productService.getTvs($routeParams.type ? $routeParams.type : '').then(function(tvs){
        $scope.products = tvs.data;
    });

    $scope.totalPrice = 0;
    $scope.productForBuy = [
    ];
    $scope.productForBuy = [];
    $scope.AddToCart = function(product){
        // if(!localStorage.getItem('$scope.productForBuy')){
        //     localStorage.setItem('$scope.productForBuy',[])
        // } else {
        //     localStorage.getItem('$scope.productForBuy');
        // }
        var newProduct = product;
        // $scope.productForBuy = localStorage.getItem('$scope.productForBuy');
        $scope.productForBuy.push(newProduct);
        localStorage.setItem('$scope.productForBuy',JSON.stringify($scope.productForBuy));
        console.log($scope.productForBuy);
        $scope.refreshTotalPrice();
    };
    $scope.RemoveFromCart = function(product){
        $scope.product = product;
        var index = $scope.productForBuy.indexOf($scope.product);
        $scope.productForBuy.splice(index,1);
        
    };
    $scope.refreshTotalPrice = function(){
        $scope.totalPrice = 0;
        $scope.productForBuy.forEach(function(p){
        $scope.totalPrice += (+p.price);
        });
    };
    $scope.refreshTotalPrice();

    $scope.changeLocation = function (path){
        $location.path(path);
    };


})