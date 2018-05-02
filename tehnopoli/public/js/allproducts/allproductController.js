app.controller('allproductController',function ($scope, $http, $location, allproductService) {
    allproductService.getAllProducts().then(function(allProducts){
        $scope.allProducts = allProducts.data;
        $scope.names = [];
        $scope.hidethis = false;

        angular.forEach($scope.allProducts,function(p){
            $scope.names.push(p.name);
        });
        // console.log($scope.names);
        $scope.complete = function(name){
            if(name.trim().length > 0){
                allproductService.search(name).then(function(output){
                    $scope.filterProduct = output.data;
                    $scope.hidethis = false;
                })
            }
            if(name.trim().length == 0){
                $scope.hidethis = !$scope.hidethis;
            }
            // var output = [];
            // angular.forEach($scope.names, function(product){
            //     if(product.toLowerCase().indexOf(string.toLowerCase()) >= 0){
            //         output.push(product);
            //     }
            // });
            
            // console.log($scope.filterProduct);
        }
        $scope.fillTextbox = function(product){
            $scope.product = product.name;
            $scope.hidethis = true;
            $location.path('/product/' + product._id);

        }
        
        
        // angular.forEach($scope.allProducts,function(p){
        //     if($scope.filterPoduct == p.name){
        //         console.log(p.name + ' ' + p._id);
        //     }
        // }) 
    });
});