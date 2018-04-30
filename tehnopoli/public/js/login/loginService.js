app.service('logintService', function ($http) {
    this.login = (user) => $http.get('http://localhost:3000/login');
});