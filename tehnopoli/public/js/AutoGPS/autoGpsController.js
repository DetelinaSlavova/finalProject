app.controller('autoGpsController',function($scope, autoGpsService){
    autoGpsService.getGPS().then(function(autoGps){
        $scope.autoGps = autoGps.data;
    });
})