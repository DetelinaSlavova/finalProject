app.controller('computerAccController',function($scope, computerAccService){
    computerAccService.getAcc().then(function(computerAcc){
        $scope.computerAcc = computerAcc.data;
    });
})