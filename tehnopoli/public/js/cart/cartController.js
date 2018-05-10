app.controller('cartController', function (cartService, $scope, $rootScope) {
    $scope.totalPrice = 0;
    $scope.data = localStorage.getItem('productForBuy')
    if ($scope.data) {
        $scope.totalPrice = 0;
        $scope.productsInCart = JSON.parse($scope.data);
        $scope.refreshTotalPrice = function () {
            $scope.totalPrice = 0;
            $scope.productsInCart.forEach(function (p) {
                $scope.totalPrice += (+p.price);
            });
        }
        $scope.refreshTotalPrice()
    }


    $scope.removeFromCart = function (product) {
        $scope.refreshTotalPrice()
        $scope.product = product;
        $scope.data = localStorage.getItem('productForBuy');
        if ($scope.data) {
            $scope.productsInCart = JSON.parse($scope.data);

            var index = $scope.productsInCart.findIndex(function (product) {
                return product._id == $scope.product._id;
            });

            $scope.productsInCart.splice(index, 1);
            localStorage.setItem('productForBuy', JSON.stringify($scope.productsInCart));
            if ($scope.productsInCart.length == 0) {
                localStorage.removeItem('productForBuy');
            }
        }
        $rootScope.isBadge = $scope.productsInCart.length;
    }

    //Detelina add

    $scope.buy = function ($event) {
        $event.preventDefault();
        cartService.addToOrders($scope.data)
            .then(function (response) {
                if (response.status >= 200 && response.status <= 399) {
                    localStorage.removeItem('productForBuy');
                    $scope.productsInCart = [];
                    alert("Покупката завърши успешно")
                }
            })
            .catch(function (err) {
                alert("Моля влезте в профила си")
            })
    }

    $rootScope.showOrders = true;
    function toggleShow() {
        $rootScope.showOrders = !$rootScope.showOrders
    }
    $scope.myOrders = function ($event) {
        $event.preventDefault();
        cartService.getMyOrders()
            .then(function (response) {
                $scope.orders = response.data.orders;
                $scope.orders = JSON.parse("[" + $scope.orders + "]");
                toggleShow();

            })
            .catch(function (err) {
                alert("Моля влезте в профила си")

            })
    }
});