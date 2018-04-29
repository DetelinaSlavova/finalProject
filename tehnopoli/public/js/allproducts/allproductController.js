app.controller('allproductController',function ($scope, allproductService) {
    allproductService.getAllProducts().then(function(allProducts){
        $scope.allProducts = allProducts.data;
        // $scope.complete = function(string){
        //     var output = [];
        //     angular.forEach($scope.allProducts,function(product){
        //         if(product.toLowerCase().indexOf(string.toLowerCase()) >= 0){
        //             output.push(product);
        //         }
        //     });
        //     $scope.filterProduct = output;
        // }
        $scope.fillTextbox = function(string){
            $scope.product = string;
            $scope.hidethis = true;
        }
    });
});