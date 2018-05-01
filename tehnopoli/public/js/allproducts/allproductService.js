app.service('allproductService',function($http){
    this.getAllProducts = () => $http.get('http://localhost:3000/allproduct');
    this.search = (name) => $http.get('http://localhost:3000/allproduct/search/' + name);
});