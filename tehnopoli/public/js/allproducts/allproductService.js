app.service('allproductService',function($http){
    this.getAllProducts = () => $http.get('http://localhost:3000/allProduct');
});