app.controller('productController', function ($scope, $timeout, productService) {

    $scope.products = [];
    $scope.basket = [];
    $scope.favProducts = [];

    $scope.newProduct = {
        name: "",
        img: "",
        code: 0,
        price: 0,
        isPromotion: false,
        isInBasket: false,
        isSold: false,
        quantity: 0,
        info: "",
        rate: 0,
        isFavorite: false,
        type: ""
    };

    productService.getAllProducts().then(function (products) { // зареждаме всички продукти и ги слагаме в $scope променлива, която е достъпна в htm файла
        //$scope.products = products.data;
        // // $timeout(function () {
        // $scope.$apply(function () {
        //     $scope.products = products;
        // });
        // }, 0);
    });

    $scope.addProduct = function ($event) {
        $event.preventDefault();

        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        /*if ($event.keyCode == 13) {
            $scope.products.push($scope.newProduct);
            $scope.newProduct = {};
        }*/
    }

    $scope.removeProduct = function (product) {
        //$scope.products.splice($scope.products.indexOf(product), 1);

        var index = $scope.products.findIndex(p => p === product);
        $scope.products.splice(index, 1);
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

    $scope.toggleSold = function (product) {
        var productP = $scope.products.find(p => product == p);
        productP.isSold = !productP.isSold;
    }

    $scope.toggleBasket = function (product) {
        var productP = $scope.products.find(p => product == p);
        productP.isInBasket = !productP.isInBasket;
        $scope.basket.push($scope.productP);
    }


    function ascendingPrice() {
        $scope.products.sort(function (p1, p1) {
            return p1.price - p1.price;
        });
    }

    function descendingPrice() {
        $scope.products.sort(function (p1, p2) {
            return p2.price - p1.price;
        });
    }

    function ascendingName() {
        $scope.products.sort(function (p1, p1) {
            var name1 = p1.name.toLowerCase();
            var name2 = p2.name.toLowerCase();

            if (name1 < name2) {
                return -1;
            }
            if (name1 > name2) {
                return 1;
            }
            return 0;
        });
    }

    function descendingName() {
        $scope.products.sort(function (p1, p1) {
            var name1 = p1.name.toLowerCase();
            var name2 = p2.name.toLowerCase();

            if (name1 < name2) {
                return 1;
            }
            if (name1 > name2) {
                return -1;
            }
            return 0;
        });
    }

});