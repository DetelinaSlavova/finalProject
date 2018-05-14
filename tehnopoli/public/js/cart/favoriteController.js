app.controller('favoriteController',function(productService, $scope, $rootScope){
    $scope.data = localStorage.getItem('favorites')
    console.log($scope.data)
    if ($scope.data) {
        $scope.favorites = JSON.parse($scope.data); 
    } else {
        alert ("нямате добавени продукти любими")
    }

    $scope.removeFromFavorite = function(product){  
        $scope.product = product;
        $scope.data = localStorage.getItem('favorites')
        if ($scope.data) {
            $scope.favorites = JSON.parse($scope.data);
          
            var index = $scope.favorites.findIndex(function (product){
                return product._id == $scope.product._id;
            });
         
            $scope.favorites.splice(index,1);
            localStorage.setItem('favorites', JSON.stringify($scope.favorites));
            if ($scope.favorites.length == 0) {
                localStorage.removeItem('favorites');
            }
        }
        $rootScope.isFavorite = $scope.favorites.length;
    }

    
    
});