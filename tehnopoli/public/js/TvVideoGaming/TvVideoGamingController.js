app.controller('TvVideoGamingController', function ($scope, $routeParams,  TvVideoGamingService) {
    TvVideoGamingService.getTvs($routeParams.type ? $routeParams.type : '').then(function(tvs){
        $scope.tvs = tvs.data;
    });

})