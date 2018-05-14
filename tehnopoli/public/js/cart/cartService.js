app.service('cartService',function($http){
    this.getMyOrders = () => $http.get('http://localhost:3000/orders')

    this.addToOrders = (order) => $http.post('http://localhost:3000/orders', order)

    
})