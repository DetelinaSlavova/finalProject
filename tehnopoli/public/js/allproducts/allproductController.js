app.controller('allproductController',function ($scope, allproductService) {
    allproductService.getAllProducts().then(function(allProducts){
        $scope.allProducts = allProducts.data;
        $scope.names = [];

        angular.forEach($scope.allProducts,function(p){
            $scope.names.push(p.name);
        });
        console.log($scope.names);
        $scope.complete = function(string){
            var output = [];
            angular.forEach($scope.names, function(product){
                if(product.toLowerCase().indexOf(string.toLowerCase()) >= 0){
                    output.push(product);
                }
            });
            $scope.filterProduct = output;
            console.log($scope.filterProduct);

        }
        $scope.fillTextbox = function(string){
            $scope.product = string;
            $scope.hidethis = true;
        }
        
        // angular.forEach($scope.allProducts,function(p){
        //     console.log(p.name + ' ' + p._id);
        // }) 
    });
});