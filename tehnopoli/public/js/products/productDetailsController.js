app.controller('productDetailsController', function ($scope, productService) {

    /*productService.getProductById(/*....*).then(function (response) {
        this.productDetails = response.data;
        //....

    }).catch(function(err){
        console.log(err);
    });*/

    productService.getAllProducts().then(function (products) { // зареждаме всички продукти и ги слагаме в $scope променлива, която е достъпна в htm файла
        //$scope.products = products.data;
        // $timeout(function () {
        $scope.$apply(function () {
            $scope.products = products;
        });
        // }, 0);
    });

});