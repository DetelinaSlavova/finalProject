app.service('adminService',function($http){
    this.getAll = () => $http.get('http://localhost:3000/allproduct');
    this.saveProduct = () => $http.post();
});