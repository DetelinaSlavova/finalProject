app.controller('productController', function ($scope, $routeParams, $rootScope, $location, productService) {
    productService.getTvs($routeParams.type ? $routeParams.type : '').then(function (tvs) {
        $scope.products = tvs.data;
    });


    $scope.compareProducts = [];

    $scope.addForCompare = function (product) {
        if (localStorage.getItem('compareProducts') != null) {
            $scope.compareProducts = JSON.parse(localStorage.getItem('compareProducts'));
        }
        if($scope.compareProducts.length >= 4){
            alert('Неможе да сравните повече от 4 продукта');
        } else {
            $scope.compareProducts.push(product);
            localStorage.setItem('compareProducts', JSON.stringify($scope.compareProducts));
            console.log($scope.compareProducts);
        }
        $rootScope.isCompare = $scope.compareProducts.length;
    }

    $scope.addToCart = function (product) {
        if (localStorage.getItem("productForBuy")) {
            $scope.productForBuy = localStorage.getItem("productForBuy");
            $scope.productForBuy = JSON.parse($scope.productForBuy)
            $scope.productForBuy.push(product);
            localStorage.setItem("productForBuy", JSON.stringify($scope.productForBuy))
        } else {
            $scope.productForBuy = [];
            $scope.productForBuy.push(product)
            localStorage.setItem("productForBuy", JSON.stringify($scope.productForBuy))
        }
        $rootScope.isBadge = $scope.productForBuy.length;
        
    }

    $scope.changeLocation = function (path) {
        $location.path(path);
    };


    // Detelina new

    $scope.addToFavorite = function (product) {
        if (localStorage.getItem("favorites")) {
            $scope.favorites = localStorage.getItem("favorites");
            // localStorage.removeItem("favorites");
            $scope.favorites = JSON.parse($scope.favorites)
            $scope.favorites.push(product);
            localStorage.setItem("favorites", JSON.stringify($scope.favorites))
        } else {
            $scope.favorites = [];
            $scope.favorites.push(product)
            localStorage.setItem("favorites", JSON.stringify($scope.favorites))
        }
        $rootScope.isFavorite = $scope.favorites.length;
    }

    $scope.promotionPrice = function () {
        productService.getTvs($routeParams.type ? $routeParams.type : '').then(function (tvs) {
            $scope.products = tvs.data;
        });
        console.log($scope.products.price / 1.)
        return $scope.products.price / 1.2
    }

    //////////////////////////
    //Sorts

    $scope.ascendingPrice = function () {
        $scope.products.sort(function (p1, p2) {
            return p1.price - p2.price;
        });
    }

    $scope.descendingPrice = function () {
        $scope.products.sort(function (p1, p2) {
            return p2.price - p1.price;
        });
    }

    $scope.ascendingName = function () {
        $scope.products.sort(function (p1, p2) {
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

    $scope.descendingName = function () {
        $scope.products.sort(function (p1, p2) {
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

    //     var brand = document.getElementById('b')[0].value;

    //     $scope.brands = [
    //          { name: 'TOSHIBA'},
    //      { name: "SANG"}, 
    //        { name: 'JVC'}
    //     ];

    //     var brand = angular.element(document.querySelectorAll("input[type=checkbox]:checked")).val();
    //     console.log($scope.brands);

    //    $scope.sortByBrand = function() {
    //         $scope.products = $scope.products.filter(function(b){
    //             return brand === b.name.split(" ")[1];
    //         });

    //     }

    $scope.selectedBrands = [];

    // $scope.selectBrand = function (selectedProduct) {
    //     // If we deselect the brand
    //     if ($scope.selectedBrands.indexOf(selectedProduct.brand) != -1) {
    //         // Deselect all products of that brand
    //         angular.forEach($scope.products, function (product) {
    //             if (product.brand === selectedProduct.brand) {
    //                 product.selected = false;
                    
    //             }
    //         });
    //     }
    // }

    $scope.check = function (selectedProduct) {
        if ($scope.selectedBrands.indexOf(selectedProduct.brand) != -1) {
            $scope.products = $scope.products.filter(function (b) {
                return selectedProduct.brand === b.brand;
            })
        }
    }

})