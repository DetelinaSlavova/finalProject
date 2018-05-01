var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    var db = req.db;
    var collection = req.db.get('TvVideoGaming');
   
    collection.find({}, {}, function(err, result){
        if(err){
            res.status(500);
            res.json({err})
        }else{
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/:id', function(req, res){
    var db = req.db;
    var collection = req.db.get('allProducts');

    collection.find({_id:req.params.id}, {}, function(err, result){
        if(err){
            res.status(500);
            res.json({err})
        }else{
            res.status(200);
            res.json(result[0]);
        }
    });
});

module.exports = router;