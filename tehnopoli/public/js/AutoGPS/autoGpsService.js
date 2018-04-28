app.service('autoGpsService',function($http){
    this.getGPS = () => $http.get('http://localhost:3000/autoGps');
});