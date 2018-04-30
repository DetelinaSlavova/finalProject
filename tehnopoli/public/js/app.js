var app = angular.module("app",['ngRoute']);
// var loginapp = angular.module("loginapp");

app.config(function ($routeProvider) {
    $routeProvider
        // .when('/login', {
        //     controller: 'loginController',
        //     templateUrl: 'js/login/login.htm'
           
        // })
        .when('/register', {
            controller: 'registerController',
            templateUrl: 'js/login/register.htm'
           
         })
        .when('/phonesTablet',{
            templateUrl: 'js/PhonesTablets/phonesTablets.htm',
            controller: 'phonesTabletsController'
        })
        .when('/computers',{
            templateUrl : 'js/Computers/computers.htm',
            controller: 'computersController'
        })
        .when('/photosCameras',{
            templateUrl: 'js/PhotosCameras/photosCameras.htm',
            controller: 'photosCamerasController'
        })
        .when('/TvVideoGaming',{
            templateUrl: 'js/TvVideoGaming/TvVideoGaming.htm',
            controller: 'TvVideoGamingController'
        })
        .when('/autoGps',{
            templateUrl: 'js/AutoGPS/autoGps.htm',
            controller: 'autoGpsController'
        })
        .when('/TvVideoGaming/:type',{
            templateUrl: 'js/TvVideoGaming/TvVideoGaming.htm',
            controller: 'TvVideoGamingController'
        })
        .when('/product/:id',{
            templateUrl : 'js/singleProduct/singleProduct.htm',
            controller : 'singleProductController'
        })
        .when('/admin/edit/:id',{
            templateUrl : 'js/admin/admin.htm',
            controller : 'adminController'
        })
        .when('/admin/create',{
            templateUrl : 'js/admin/admin.htm',
            controller : 'adminController'
        })
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