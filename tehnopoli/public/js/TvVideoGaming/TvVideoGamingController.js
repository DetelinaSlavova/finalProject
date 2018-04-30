app.controller('TvVideoGamingController', function ($scope, TvVideoGamingService) {
    TvVideoGamingService.getTvs().then(function(allProducts){
        $scope.allProducts = allProducts.data;
       
     
            $scope.products = $scope.allProducts.filter(function(i){
                if(i.type ==="tv") {
                   return $scope.allProducts;
                } 
            })
      
       
      

    });
})