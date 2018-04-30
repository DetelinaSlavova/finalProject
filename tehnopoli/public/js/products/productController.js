app.controller('productController', function ($scope, productService) {
    $scope.newProduct = {
        name: "",
        img: "",
        code: 0,
        price: 0,
        info: "",
        rate: 0,
        isFavorite: false,
        isPromotion: false
    };

    productService.getAllProducts().then(function (products) { // зареждаме всички продукти и ги слагаме в $scope променлива, която е достъпна в htm файла
        $scope.products = products.data;
    });

    $scope.removeProduct = function (todo) {
        $scope.products.splice($scope.products.indexOf(product), 1);
    }

    $scope.toggleFavorite = function (product) {
        var productP = $scope.products.find(p => product == p);
        productP.isFavorite = !productP.isFavorite;
        $scope.favProducts.push($scope.productP);
    }

    $scope.togglePromotion = function (product) {
        var productP = $scope.products.find(p => product == p);
        productP.isPromotion = !productP.isPromotion;
    }

    $scope.addProduct = function ($event) {
        if ($event.keyCode == 13) {
            $scope.products.push($scope.newProduct);
            $scope.newProduct = {};
        }
    }



    
});