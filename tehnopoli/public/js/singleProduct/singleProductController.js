app.controller('singleProductController', function($scope, $routeParams, $location, singleProductService){
    singleProductService.show($routeParams.id).then(function(product){
        // console.log($routeParams.id)
        $scope.product = product.data;
    
    })

    // $scope.compProducts = [
    // ];
    // $scope.compareProducts = function(product){
    //     var compareProduct = product;
    //     console.log( $scope.compProducts)
    //     $scope.compProducts.push( $scope.compProducts);
    //     localStorage.setItem('compareProduct', JSON.stringify($scope.compProducts));
    //     // console.log($scope.compProducts);
    // };


    $scope.changeLocation = function (path){
        $location.path(path);
    };
});