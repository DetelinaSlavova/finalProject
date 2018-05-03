app.service('loginService', function ($http) {
    this.login = function (user) {

        return $http.post(window.location.origin + '/login', user);

    
    }

});
