app.service('computerService', function ($http) {
    this.getComputers = () => $http.get('http://localhost:3000/computers');
});
