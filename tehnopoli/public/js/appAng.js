var app = angular.module("appAng",['ngRoute']);
// var loginapp = angular.module("loginapp");

app.config(function ($routeProvider) {
    $routeProvider
        // .when('/product/:id', { // примерен url за преглеждане на един продукт, който се взема по неговото id от mongo
        //     templateUrl: '....',
        //     controller: '....' // контролера трябва да е добавен в index.html. 
        //                        // в контролера стойността на id-то се достъпва като се добави променива $routeParams във функцията на контролера.
        //                        //  примермо: app.controller('testCongtroller', function(..., $routeParams) { productService.getProduct($routeParams.id) })
        // })
        .otherwise({
            templateUrl: 'js/products/product.htm',
            controller: 'productController'
        });
});