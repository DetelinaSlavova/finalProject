var app = angular.module("app",['ngRoute']);
// var loginapp = angular.module("loginapp");

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
           controller: 'loginController',
           templateUrl: 'js/login/login.htm'
           
         })
        .when('/register', {
            controller: 'registerController',
            templateUrl: 'js/login/register.htm'
           
         })
        .when('/phonesTablet/:type',{
            templateUrl: 'js/getProduct/products.htm',
            controller: 'productController'
        })
        .when('/computers/:type',{
            templateUrl : 'js/getProduct/products.htm',
            controller: 'productController'
        })
        .when('/photosCameras/:type',{
            templateUrl: 'js/getProduct/products.htm',
            controller: 'productController'
        })
        .when('/TvVideoGaming',{
            templateUrl: 'js/getProduct/products.htm',
            controller: 'productController'
        })
        .when('/autoGps/:type',{
            templateUrl: 'js/getProduct/products.htm',
            controller: 'productController'
        })
        .when('/TvVideoGaming/:type',{
            templateUrl: 'js/getProduct/products.htm',
            controller: 'productController'
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
       
        .otherwise({
            templateUrl: 'js/main/homePage.htm',
            // controller: 'productController'
        });
});