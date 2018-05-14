var express = require('express');
var router = express.Router();
var sha1 =require("sha1");

const PASS_LENGHT = 8;
const MAX_LENGHT = 25;

function isValidEmail(email) {
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
};

function isValidString(str) {
 return (typeof str === 'string' && str.length > 0 && str.length <=MAX_LENGHT);
};


function isValidPassword(pass) {
 return (isValidString && pass.length >= PASS_LENGHT && pass.length<=MAX_LENGHT)
};

function isValidPhoneNumber(phone) {
 var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
 return re.test(String(phone));
};
  

  router.post('/', function(req, res, next){
    res.setHeader('content-type', 'aplication/json');
    var userCollection = req.db.get('user');
    var logedUser = req.body;
    if(!(isValidPassword(logedUser.email)) || !(isValidPassword(logedUser.password))) {
        res.status(412);
        res.json({massages:"invalid data"});
    } else {
      logedUser.password = sha1(logedUser.password);
      userCollection.find({email:logedUser.email, password:logedUser.password}, {},function(err, docs){
        if(err){
          res.status(500);
          res.json({err:err});
        }
          if(docs.length>0) {
            res.status(200);
            tmpUser = docs[0] 
            tmpUserId= docs[0]._id
            // userCollection.update({_id:tmpUserId},{ $set:{
            //   "isLoged":true,
            // }})
            req.session.tmpUser = tmpUser;
            delete tmpUser.password;
            delete tmpUser.repeatedpass;
            // console.log( req.session)
            res.json(docs[0])    
        } else {
          res.status(401);
          res.json({status: "Bad credential"});
        }
      });
  }
});

  router.get('/', function (req, res, next) {
    var usersCollection = req.db.get('users');
    usersCollection.find({}, {}, function (err, docs) {
      if (err) {
        res.status(500);
        res.json(err);
      } else {
        res.status(200);
        res.json({ _id: req.session.logedUser._id });
      }
    })
  });

  router.post('/logout', function (req, res, next) {
    res.setHeader('content-type', 'aplication/json');
    var usersCollection = req.db.get('user');
    var tmpUserId = req.session.tmpUser._id;
    var tmpIsLogged = req.session.tmpUser.isLoged;
    if((req.session)) {
      // usersCollection.update({_id:tmpUserId},{ $set:{
      //   "isLoged":false,
      // }})
      console.log(req.session)
      req.session.destroy();
      console.log(req.session)
      
      // , function (err, docs) {
      //   if (err) {
      //     res.status(500);
      //     res.json(err);
      //   } else {
      //     res.status(200);
      //     res.json({statusText: "ОК"});
      //   }
        
      // }) 
    }
  })


  module.exports = router;