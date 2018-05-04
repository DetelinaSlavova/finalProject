var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    var db = req.db;
    var collection = req.db.get('allProducts');
    var params = {};
    if(req.query.type){
        params.type = req.query.type;
    }
    collection.find(params, {}, function(err, result){
        if(err){
            res.status(500);
            res.json({err})
        }else{
            res.status(200);
            res.json(result);
        }
    });
});

module.exports = router;    