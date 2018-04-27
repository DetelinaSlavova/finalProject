

app.controller('registerController', function ($scope, registerService) {
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
    isAdmin: false
   }

   $scope.wrongEmail = false;
   $scope.wrongFirstName = false;
   $scope.wrongLastName = false;
   $scope.wrongPassword = false;
   $scope.wrongReapedPass = false;
   $scope.wrongPhoneNumber = false;
   $scope.registered = false;

   function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  function isValidString(str) {
    return (typeof str === 'string' && str.length > 0);
  };
  const PASS_LENGHT = 8;
  
  function isValidPassword(pass) {
    return (isValidString && pass.length >= PASS_LENGHT)
  };
  
  function isValidPhoneNumber(phone) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone));
  };
    angular.element('#email').on('focus', function () {
    $scope.wrongEmail = false;
    });
    angular.element('#password').on('focus', function () {
        $scope.wrongPassword = false;
    });

    angular.element('#fname').on('focus', function () {
        $scope.wrongFirstName = false;
    });

    angular.element('#lname').on('focus', function () {
        $scope.wrongLastName = false;
    });
    angular.element('#confirmPassword').on('focus', function () {
        $scope.wrongReapedPass = false;
    });

    angular.element('#phone').on('focus', function () {
        $scope.wrongPhoneNumber = false;
    });

  
  $scope.userRegister = function ($event) {
    $event.preventDefault();
    
    console.log($event)
    if (!isValidEmail){
        $scope.wrongEmail = true;
        return;
    }

    if (!isValidPassword){
        $scope.wrongPassword = true;
        return;
    }
    if (!isValidPassword){
        $scope.wrongPassword = true;
        return;
    }

    if (!isValidPhoneNumber){
        $scope.wrongPhoneNumber = true;
        return;
    }
 
  registerService.register($scope.newUser)
  .then(function (data) {
    
      $scope.wrongReapedPass = false;
      if (data == null) {
        $scope.$apply(function () {
          $scope.registered = true;
        })
      } else {
          location.replace('/');
      }
  })
}


}) 