// app.service('productService', function ($http) {
//     this.getAllProducts = () => $http.get('http://localhost:3000/allProduct');

//     /*this.getAllProducts = function () {
//         return new Promise(function (resolve, reject) {
//             $http.get('http://localhost:3000/product')
//                 .then(function (response) {
//                     resolve(response.data);
//                 })
//                 .catch(err => reject(err));
//         });
//     }*/
    
//     this.getProductById = function(id){
//         return $http.get('http://localhost:3000/allProduct' + id);
//     }

//     this.getProductByCategory = function(category){
//         return $http.get('http://localhost:3000/allProduct' + category);
//     }

// });