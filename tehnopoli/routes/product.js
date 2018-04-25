var express = require('express');
var router = express.Router();

router.get('/', function(req, res,){
    var products = req.db.get('products');
    products.find({},{sortBy: 'price'}, function(product){
        res.json(products);

    });
});

module.exports = router;