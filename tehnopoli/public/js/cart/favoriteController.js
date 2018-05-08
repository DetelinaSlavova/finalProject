app.controller('favoriteController',function(productService, $scope, $rootScope){
    $scope.data = sessionStorage.getItem('favorites')
    if ($scope.data) {
        $scope.favorites = JSON.parse($scope.data); 
    } else {
        alert ("нямате добавени продукти любими")
    }

    $scope.RemoveFromFavorite = function(product){  
        $scope.product = product;
        $scope.data = sessionStorage.getItem('favorites')
        if ($scope.data) {
            $scope.favorites = JSON.parse($scope.data);
          
            var index = $scope.favorites.findIndex(function (product){
                return product._id == $scope.product._id;
            });
         
            $scope.favorites.splice(index,1);
            if (index > 0) {
                sessionStorage.setItem('favorites',JSON.stringify($scope.favorites));
            } else {
                // $scope.favorites.splice(index,1);
                sessionStorage.removeItem('favorites') 
            }
        }
    }
    
});