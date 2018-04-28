var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    var db = req.db;
    var collection = req.db.get('PhotosCameras');

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

module.exports = router;    