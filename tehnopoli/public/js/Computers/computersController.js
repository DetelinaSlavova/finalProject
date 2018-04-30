app.controller('computersController', function ($scope, computerService) {
    computerService.getComputers().then(function(computers){
        $scope.computers = computers.data;
    });
})