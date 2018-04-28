app.service('photosCamerasService',function($http){
    this.getCameras = () => $http.get('http://localhost:3000/photosCameras');
});