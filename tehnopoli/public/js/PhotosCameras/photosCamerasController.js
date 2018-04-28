app.controller('photosCamerasController',function($scope, photosCamerasService){
    photosCamerasService.getCameras().then(function(photos){
        $scope.photos = photos.data;
    });
})