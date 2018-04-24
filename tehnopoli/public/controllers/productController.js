product.controller('productController', function ($scope) {
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



    $scope.products = [];
});