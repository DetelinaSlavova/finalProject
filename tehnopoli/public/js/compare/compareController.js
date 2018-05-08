app.controller('compareController', function ($scope) {
    if(sessionStorage.getItem('compareProducts') != null){
        $scope.compareProducts = JSON.parse(sessionStorage.getItem('compareProducts'));
    } else {
        $scope.compareProducts = [];
    }
    
});
