app.controller('productDetailsController', function ($scope, productService) {

    productService.getProductById(/*....*/).then(function (response) {
        this.productDetails = response.data;
        //....

    }).catch(function(err){
        console.log(err);
    });

});