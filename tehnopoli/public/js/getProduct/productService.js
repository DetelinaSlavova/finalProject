app.service('productService',function($http){
    this.getTvs = (type) => $http.get('http://localhost:3000/TvVideoGaming?type=' + type);
});