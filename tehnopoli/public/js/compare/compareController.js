app.controller('compareController', function ($scope) {
    if(sessionStorage.getItem('compareProducts') != null){
        $scope.compareProducts = JSON.parse(sessionStorage.getItem('compareProducts'));
    } else {
        $scope.compareProducts = [];
    }

    $scope.addForCompare = function (product) {
        if (sessionStorage.getItem('compareProducts') != null) {
            $scope.compareProducts = JSON.parse(sessionStorage.getItem('compareProducts'));
        }
        if($scope.compareProducts.length >= 4){
            alert('Неможе да сравните повече от 4 продукта');
        } else {
            $scope.compareProducts.push(product);
            sessionStorage.setItem('compareProducts', JSON.stringify($scope.compareProducts));
            console.log($scope.compareProducts);
        }
    }
    
});
