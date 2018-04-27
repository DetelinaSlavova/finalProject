app.service('registerService', function ($http) {
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
});
