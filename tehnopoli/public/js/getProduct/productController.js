app.controller('productController', function ($scope, $routeParams,  productService) {
    productService.getTvs($routeParams.type ? $routeParams.type : '').then(function(tvs){
        $scope.products = tvs.data;
    });

})