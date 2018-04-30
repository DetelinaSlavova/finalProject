app.service('registerService', function ($http) {
<<<<<<< HEAD
    this.getAllUsers = () => $http.get('http://localhost:3000/register');
=======
    this.register = function (user) {
        return new Promise(function (resolve, reject) {
            $http.post('/register', user)
                .then(function (response) {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        resolve(null);
                    }
                })
                .catch(function (err) {
                    reject(err);
                });
        });
    }
>>>>>>> 2648130203e816902a2e5bc2b9baa68cf6de7da3
});
