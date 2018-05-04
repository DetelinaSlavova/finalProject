app.controller('cartController',function($scope,cartService,){
    $scope.totalPrice = 0;
    $scope.productForBuy = [];
    $scope.data = localStorage.getItem('$scope.productForBuy')
    $scope.realdata = JSON.parse($scope.data);
    // $scope.final = [];
    for(var index = 0;index<$scope.realdata.length;index++){
        $scope.productForBuy.push($scope.realdata[index]);
    }
    $scope.refreshTotalPrice = function(){
        $scope.totalPrice = 0;
        $scope.productForBuy.forEach(function(p){
        $scope.totalPrice += (+p.price);
        });
    };
    $scope.refreshTotalPrice();
    // $scope.productForBuy.push($scope.realdata[0]);
    console.log($scope.productForBuy);
    // $scope.productForBuy = [];
    // $scope.AddToCart = function(product){
    //     var newProduct = product;
    //     $scope.productForBuy.push(newProduct);
    //     console.log($scope.productForBuy);

    // };
    $scope.RemoveFromCart = function(product){
        $scope.product = product;
        var index = $scope.productForBuy.indexOf($scope.product);
        $scope.productForBuy.splice(index,1);
        // $scope.productForBuy = JSON.stringify($scope.productForBuy);
        localStorage.setItem('$scope.productForBuy',$scope.productForBuy);
    }
    // $scope.refreshTotalPrice = function(){
    //     $scope.totalPrice = 0;
    //     $scope.productForBuy.forEach(function(p){
    //     $scope.totalPrice += (+p.price);
    //     });
    // };
    // $scope.refreshTotalPrice();
});