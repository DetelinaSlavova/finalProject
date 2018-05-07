app.controller('productController', function ($scope, $routeParams, $location, productService) {
    productService.getTvs($routeParams.type ? $routeParams.type : '').then(function(tvs){
        $scope.products = tvs.data;
    });

    $scope.totalPrice = 0;
    $scope.productForBuy = [
    ];
    $scope.productForBuy = [];
    $scope.AddToCart = function(product){
        // if(!localStorage.getItem('$scope.productForBuy')){
        //     localStorage.setItem('$scope.productForBuy',[])
        // } else {
        //     localStorage.getItem('$scope.productForBuy');
        // }
        var newProduct = product;
        // $scope.productForBuy = localStorage.getItem('$scope.productForBuy');
        $scope.productForBuy.push(newProduct);
        localStorage.setItem('$scope.productForBuy',JSON.stringify($scope.productForBuy));
        console.log($scope.productForBuy);
        $scope.refreshTotalPrice();
    };
    $scope.RemoveFromCart = function(product){
        $scope.product = product;
        var index = $scope.productForBuy.indexOf($scope.product);
        $scope.productForBuy.splice(index,1);
        
    };
    $scope.refreshTotalPrice = function(){
        $scope.totalPrice = 0;
        $scope.productForBuy.forEach(function(p){
        $scope.totalPrice += (+p.price);
        });
    };
    $scope.refreshTotalPrice();

    $scope.changeLocation = function (path){
        $location.path(path);
    };


    //////////////////////////
    //Sorts
    
    $scope.ascendingPrice = function() {
        $scope.products.sort(function (p1, p2) {
            return p1.price - p2.price;
        });
    }

    $scope.descendingPrice = function() {
        $scope.products.sort(function (p1, p2) {
            return p2.price - p1.price;
        });
    }

    $scope.ascendingName = function() {
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

    $scope.descendingName = function() {
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

    //var brand = document.getElementById('b')[0].value;

    /*$scope.brands = [
        { name: 'TOSHIBA'},
        { name: "SANG"}, 
        { name: 'JVC'}
    ];*/

    //var brand = angular.element(document.querySelectorAll("input[type=checkbox]:checked")).val();
    //console.log($scope.brands);
    
   // $scope.sortByBrand = function() {
        /*$scope.products = $scope.products.filter(function(b){
            return brand === b.name.split(" ")[1];
        });*/
        
    //}

    $scope.selectedBrands = [];

    $scope.selectBrand = function(selectedProduct) {
        // If we deselect the brand
        if ($scope.selectedBrands.indexOf(selectedProduct.name.split(' ')[1]) != -1) {
          // Deselect all products of that brand
          angular.forEach($scope.products, function(product) {
            if (product.name.split(' ')[1] === selectedProduct.name.split(' ')[1]) {
              product.selected = false;
          }
        });
      }
    }

    $scope.check = function(selectedProduct){
        if ($scope.selectedBrands.indexOf(selectedProduct.name.split(' ')[1]) != -1) {

            $scope.products = $scope.products.filter(function(b){
                return selectedProduct.name.split(' ')[1] === b.name.split(' ')[1];
            })
        }
    }

})