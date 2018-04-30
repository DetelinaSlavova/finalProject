app.controller('singleProductController', function($scope, $routeParams, singleProductService){
    singleProductService.show($routeParams.id).then(function(product){
        $scope.product = product.data;
    })
});