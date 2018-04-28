app.service('computerAccrvice',function($http){
    this.getAcc = () => $http.get('http://localhost:3000/computerAcc');
});