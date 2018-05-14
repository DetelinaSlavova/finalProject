app.controller('singleProductController', function($scope, $routeParams, $location, singleProductService){
    singleProductService.show($routeParams.id).then(function(product){
        // console.log($routeParams.id)
        $scope.product = product.data;
    
    })


    $scope.changeLocation = function (path){
        $location.path(path);
    };
});