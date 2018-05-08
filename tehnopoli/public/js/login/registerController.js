

app.controller('registerController', function ($scope, registerService, $location) {
    $scope.newUser = {
     firstname: "",
     lastname: "",
     email: "",
     phone: "",
     password: "",
     repeatedpass: "",
     cart: [],
     favorite: [],
     orders: [],
     isAdmin: false,
     isLoged: false,
    }
 
    $scope.wrongEmail = false;
    $scope.wrongFirstName = false;
    $scope.wrongLastName = false;
    $scope.wrongPassword = false;
    $scope.wrongReapedPass = false;
    $scope.wrongPhoneNumber = false;
    $scope.registered = false;
    $scope.isError = false;
 
    const PASS_LENGHT = 8;
    const MAX_LENGHT = 25;
 
    function isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
   
   function isValidString(str) {
     return (typeof str === 'string' && str.length > 0 && str.length <=MAX_LENGHT);
   };
   
   
   function isValidPassword(pass) {
     return (isValidString && pass.length >= PASS_LENGHT && pass.length<=MAX_LENGHT)
   };
   
   function isValidPhoneNumber(phone) {
     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
     return re.test(String(phone));
   };

    $scope.changeLocation = function (path){
        $location.path(path);
    };

   angular.element("#emailForRegister").on("focus", function(){
    $scope.wrongEmail = false;
    $scope.isError = false;
   });

   angular.element("#password").on("click", function(){
    $scope.wrongPassword = false;
   });

   angular.element("#password").on("click", function(){
    $scope.wrongPassword = false;
   
   });

   angular.element("#firstname").on("click", function(){
    $scope.wrongFirstName = false;
   });

   angular.element("#lastname").on("click", function(){
    $scope.wrongLastName = false;
   });

   angular.element("#confirmPassword").on("click", function(){
    $scope.wrongReapedPass = false;
   });

   angular.element("#phone").on("click", function(){
    $scope.wrongPhoneNumber = false;
   });

  

   $scope.userRegister = function ($event, path) {
     $event.preventDefault();
     if (!(isValidEmail($scope.newUser.email))){
         $scope.wrongEmail = true;
         $scope.newUser.email = "";
         return;
     }
    
     if (!(isValidPassword($scope.newUser.password))){
         $scope.wrongPassword = true;
         $scope.newUser.password = '';
         return;
     } 
 
     if (!(isValidString($scope.newUser.firstname))){
         $scope.wrongFirstName = true;
         $scope.newUser.firstname = "";
         return;
     }
 
     if (!(isValidString($scope.newUser.lastname))){
         $scope.wrongLastName = true;
         $scope.newUser.lastname="";
         return;
     }
 
     if (!($scope.newUser.password===$scope.newUser.repeatedpass)){
         $scope.wrongReapedPass = true;
         $scope.newUser.repeatedpass = "";
         return;
     } 
     if (!(isValidPhoneNumber($scope.newUser.phone))){
         $scope.wrongPhoneNumber = true;
         $scope.newUser.phone = "";
         return;
     }
     registerService.register($scope.newUser)
        .then(function (data) {
            $location.path('/login')
        })
        .catch (function(err) {
            if (err){
                $scope.isError = true;
                $scope.error = err.data.statusText;
            }     
        })

        $scope.changeLocation = function (path){
            $location.path(path);
        };
    }

    // var myCtrl = function (recaptchaFactory) {
    //     var recaptcha = recaptchaFactory.create('.my-recaptcha', {
    //         sitekey: '6LcfD1gUAAAAAIQb6mP_dK1w3W74SJsgR0NoZlps'
    //     });
    //     recaptcha.render();
    // }
    
    // angular
    //     .module("app", ['ngGoogleRecaptcha'])
    //     .controller("myCtrl", [
    //         'recaptchaFactory',
    //         myCtrl
    //     ]);

    //     var callbacks = {
    //         /* executes when recaptcha is successfully rendered on page */
    //         created: function (widgetId) {
    //             console.log("I'm created with widgetId: " + widgetId);
    //         },
    //         /* executes when user submits successfull recaptcha response */
    //         success: function (response) {
    //             console.log('Successfully got response from Google:', response);
    //             var params = {
    //                 response: response
    //             };
    //             /* makes GET request to given url with some params and executes callback on success */
    //             recaptcha.verify('/your_verification_url', params, function(data){
    //                 console.log('Verified and get response: ', data);
    //             });
    //         },
    //         /* executes when recaptcha response expires */
    //         expired: function (widgetId) {
    //             console.log("Recaptcha with widgetId: " + widgetId + " is expired");
    //             recaptcha.reload();
    //         }
    //     }
    //     recaptcha.setConfig(callbacks);
    //     recaptcha.render();

    //     var lookConfig = {
    //         /* 'light' by default */
    //         theme: 'dark',
    //         /* 'image' by default */
    //         type: 'audio',
    //         /* 'normal' by default */
    //         size: 'compact',
    //         /* 0 by default */
    //         tabindex: 1
    //     };
    //     recaptcha.setConfig(lookConfig);

 })