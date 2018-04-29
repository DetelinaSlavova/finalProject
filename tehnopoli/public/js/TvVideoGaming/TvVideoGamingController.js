app.controller('TvVideoGamingController', function ($scope, TvVideoGamingService) {
    TvVideoGamingService.getTvs().then(function(tvs){
        $scope.tvs = tvs.data;
        $scope.tvs.forEach(function(i){
            $scope.info =(i.info[0]);
            // console.log($scope.info)
            
       }) 
    });
})