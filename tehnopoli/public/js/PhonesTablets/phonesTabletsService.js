app.service('phonesTabletsService', function ($http) {
    this.getPhones = () => $http.get('http://localhost:3000/phonesTablet');
});
