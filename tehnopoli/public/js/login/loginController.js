app.controller('loginController', function ($scope, loginService, $location) {

    $scope.changeLocation = function (path){
        $location.path(path);
    };
  
})