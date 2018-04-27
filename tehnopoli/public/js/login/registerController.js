

app.controller('registerController', function ($scope, registerService) {
    registerService.getAllUsers().then(function (users) { // зареждаме всички продукти и ги слагаме в $scope променлива, която е достъпна в htm файла
        $scope.users = users.data;
    });
})