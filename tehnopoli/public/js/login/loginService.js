app.service('loginService', function ($http) {
    this.login = (user) => $http.get('http://localhost:3000/login');
});