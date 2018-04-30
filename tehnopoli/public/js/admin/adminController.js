app.controller('adminController',function ($scope, $http, $routeParams, $location, singleProductService){
    if($routeParams.id){
        singleProductService.show($routeParams.id).then(function(res){
            $scope.product = res.data;
            $scope.keys = Object.keys($scope.product.info[0]);
        });
    }
    $scope.addSpecification = function(){
        // $scope.keys.push('');
        $scope.product.info[0][Math.random()] = '';
    }
    $scope.save = function(){
        $http.post('/admin/product', $scope.product)
        console.log($scope.product.info[0]);
    }
    $scope.changeKey = function(oldKey,newKey){
        console.log(oldKey,newKey);
        $scope.product.info[0][newKey] = $scope.product.info[0][oldKey];
        delete $scope.product.info[0][oldKey];
    }
});