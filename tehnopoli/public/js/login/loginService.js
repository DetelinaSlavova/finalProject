app.service('loginService', function ($http) {
    this.login = function (user) {
    return $http.post(window.location.origin + '/login', user);
    } 
    this.logout = function () {
    return $http.post(window.location.origin + '/login/logout' );
    }

});
