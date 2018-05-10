app.controller('compareController', function ($scope) {
    if(localStorage.getItem('compareProducts') != null){
        $scope.compareProducts = JSON.parse(localStorage.getItem('compareProducts'));
    } else {
        $scope.compareProducts = [];
    }

    $scope.addForCompare = function (product) {
        if (localStorage.getItem('compareProducts') != null) {
            $scope.compareProducts = JSON.parse(localStorage.getItem('compareProducts'));
        }
        if($scope.compareProducts.length >= 4){
            alert('Неможе да сравните повече от 4 продукта');
        } else {
            $scope.compareProducts.push(product);
            localStorage.setItem('compareProducts', JSON.stringify($scope.compareProducts));
            console.log($scope.compareProducts);
        }
    }
    
});
