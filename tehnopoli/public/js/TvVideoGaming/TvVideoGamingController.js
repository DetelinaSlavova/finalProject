app.controller('TvVideoGamingController', function ($scope, $routeParams,  TvVideoGamingService) {
    TvVideoGamingService.getTvs($routeParams.type ? $routeParams.type : '').then(function(tvs){
        $scope.products = tvs.data;

        var brand = document.getElementsByClassName('b')[0].value;

        function sortByBrand() {
            $scope.products = $scope.products.filter(function(b){
                return brand === b.name.split(" ")[1].join();
            });
        }
    });
    
})