app.controller('adminController',function ($scope,$rootScope, $http, $routeParams, $location, singleProductService, adminService){
    if($routeParams.id){
        singleProductService.show($routeParams.id).then(function(res){
            $scope.product = res.data;
            $scope.keys = Object.keys($scope.product.info[0]);
        });
    } else {
        $scope.product = {};
    }
    
    $scope.addSpecification = function(){
        // $scope.keys.push('');
        $scope.product.info[0][Math.random()] = '';
    }
    $scope.save = function(){
        $http.post('/admin/product', $scope.product)
        
    }
    $scope.changeKey = function(oldKey,newKey){
       
        $scope.product.info[0][newKey] = $scope.product.info[0][oldKey];
        delete $scope.product.info[0][oldKey];
    }
    $scope.changeLocation = function (path){
        $location.path(path);
    };

    
   
});