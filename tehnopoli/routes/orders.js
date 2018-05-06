var express = require('express');
var router = express.Router();
var sha1 =require("sha1");

router.post('/', function (req, res, next) {
    res.setHeader('content-type', 'aplication/json');
    var usersCollection = req.db.get('user');
    var tmpUserId = req.session.tmpUser._id;
    var orders = req.session.tmpUser.orders
    var newOrder = {
        "name": req.body[0].name,
        "img": req.body[0].img,
        "price": req.body[0].price
    } 
      usersCollection.update({_id:tmpUserId},{$push: { "orders": newOrder}
           },
            function(err, doc){
                if (err){
                    res.status(500);
                    res.json({err:err});
                } else {
                    res.status(200);
                    res.json ({message: "SUCCESSFULLY added"})
                }
            })    
    });

    router.get('/', function(req, res){
       
        var usersCollection = req.db.get('user');
        var tmpUserId = req.session.tmpUser._id;

        usersCollection.find({_id:tmpUserId}, {}, function(err, doc){
            if(err) {
                res.status(500);
                res.json({err: err});
            }else{
                if (doc.length > 0) {
                    res.status(200);
                    res.json(doc[0]);  
                } else {
                    res.status(401);
                    res.json({status: "not authorized"})
                }
            }
        })
    })

    


module.exports = router;
