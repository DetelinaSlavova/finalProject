app.controller('phonesTabletsController', function ($scope, phonesTabletsService) {
    phonesTabletsService.getPhones().then(function(phones){
        $scope.phones = phones.data;
    });
})