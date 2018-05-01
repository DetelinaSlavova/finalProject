var express = require('express');
var router = express.Router();
router.post('/product', function(req, res){
    
    var db = req.db;
    var collection = req.db.get('allProducts');
    if(req.body._id){
        collection.update({_id : req.body._id},req.body,function(err,data){
            if(err){
                res.json(err);
            } else{
                res.json(data);
            }
        });
    } else {
        collection.insert(req.body,function(err,data){
            res.json(data);
        });
    }
   
});
module.exports = router;