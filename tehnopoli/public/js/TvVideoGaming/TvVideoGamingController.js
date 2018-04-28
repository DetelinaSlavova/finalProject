app.controller('TvVideoGamingController', function ($scope, TvVideoGamingService) {
    TvVideoGamingService.getTvs().then(function(tvs){
        $scope.tvs = tvs.data;
    });
})