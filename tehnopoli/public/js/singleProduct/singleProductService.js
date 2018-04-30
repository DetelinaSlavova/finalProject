app.service('singleProductService',function($http){
    this.show = (id) => $http.get('http://localhost:3000/product/' + id);
});