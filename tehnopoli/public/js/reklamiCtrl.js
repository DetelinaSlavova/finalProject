
app.controller('reklamiCtrl',function($scope, $http, reklamiService){
    $scope.reklami = [
        {photo : "images/reklami/reklama1.jpg"},
        {photo : "images/reklami/reklama2.jpg"},
        {photo : "images/reklami/reklama3.jpg"},
        {photo : "images/reklami/reklama4.jpg"},
        {photo : "images/reklami/reklama5.jpg"}
    ];
    $scope.reklama = $scope.reklami[Math.floor(Math.random() * $scope.reklami.length)];

    // reklamiService.getAllProducts().then(products => {
    //     $scope.products = products.data;
    //     console.log($scope.products);
    // })
});