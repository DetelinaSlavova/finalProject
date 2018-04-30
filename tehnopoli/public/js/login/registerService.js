app.service('registerService', function ($http) {
    this.getAllUsers = () => $http.get('http://localhost:3000/register');
});
