

app.controller('registerController', function ($scope, registerService) {
<<<<<<< HEAD
    registerService.getAllUsers().then(function (users) { // зареждаме всички продукти и ги слагаме в $scope променлива, която е достъпна в htm файла
        $scope.users = users.data;
    });
=======
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

  $scope.clearAllInput = function (){
      $scope.newUser.email = "";
      $scope.newUser.password = "";
      $scope.newUser.firstname = "";
      $scope.newUser.lastname = "";
      $scope.newUser.repeatedpass = "";
      $scope.newUser.phone = "";
  }

  
  $scope.userRegister = function ($event) {
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
        location.replace('#');
        $scope.$apply(function () {
            $scope.registered = true;
            console.log($scope.reqistered)
            })
        
    })
}

>>>>>>> 2648130203e816902a2e5bc2b9baa68cf6de7da3
})