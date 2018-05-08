app.controller('cartController',function(cartService, $scope, $rootScope){
    $scope.totalPrice = 0;
    $scope.data = sessionStorage.getItem('productForBuy')
    if ($scope.data) {
        $scope.productsInCart = JSON.parse($scope.data); 
    } else {
        alert ("нямате добавени продукти в кошницата")
    }


    $scope.RemoveFromCart = function(product){  
        $scope.product = product;
        $scope.data = sessionStorage.getItem('productForBuy')
        if ($scope.data) {
            $scope.productsInCart = JSON.parse($scope.data);
          
            var index = $scope.productsInCart.findIndex(function (product){
                return product._id == $scope.product._id;
            });
         
            $scope.productsInCart.splice(index,1);
            if (index > 0) {
                sessionStorage.setItem('productForBuy',JSON.stringify($scope.productsInCart));
                refreshTotalPrice();
            } else {
                sessionStorage.removeItem('productForBuy') 
            }
        }
        
    }
    

    //Detelina add

    $scope.buy = function ($event) {
        $event.preventDefault();
        cartService.addToOrders($scope.data) 
        .then(function (response) {
            if (response.status >= 200 && response.status <= 399) {
                sessionStorage.removeItem('productForBuy');
                $scope.productsInCart = [];
                alert ("Покупката завърши успешно")
            }
        })
        .catch (function (err){
            alert("Моля влезте в профила си")    
        })
    }

    $rootScope.showOrders = true;
    function toggleShow () {
        $rootScope.showOrders=!$rootScope.showOrders 
    }
    $scope.myOrders = function ($event) {
        $event.preventDefault();
        cartService.getMyOrders ()
            .then(function(response){
                $scope.orders = response.data.orders;
                $scope.orders = JSON.parse("[" + $scope.orders + "]");
                toggleShow();
                
            })
            .catch (function(err){
               alert("Моля влезте в профила си")
                
            })
        }

          
    
});