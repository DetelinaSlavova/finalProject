app.service('TvVideoGamingService',function($http){
    this.getTvs = () => $http.get('http://localhost:3000/TvVideoGaming');
});