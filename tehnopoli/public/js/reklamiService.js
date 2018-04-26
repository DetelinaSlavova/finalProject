app.service('reklamiService', function ($http) {
    this.getAllProducts = () => $http.get('http://localhost:3000/product');
});