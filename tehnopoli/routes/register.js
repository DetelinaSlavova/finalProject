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
      // req.setHeader('Content-type', 'aplication/json');
      var userCollection = req.db.get('user');
      var newUser = req.body;

      if(!(isValidPassword(newUser.email)) && !(isValidPassword(newUser.password)) 
          && !(isValidString(newUser.firstname)) && !(isValidString(newUser.lastname))){
          res.status(200);
          res.json({massages:"invalid data"});
      } else {
        userCollection.find({email:newUser.email}, {}, function(err, docs){
            if (err){
              res.status(500);
              res.json({err: err});
            } else {
              if(docs.length === 0) {
                newUser.password = sha1(newUser.password);
                newUser.repeatedpass = sha1(newUser.repeatedpass);
                userCollection.insert(newUser, function(err, docs){
                  if(err) throw err;
                  res.json({statusText: "Wrong username or password"});
                  
                });
              } else {
                res.status(413);
                res.json({statusText: "Има регистриран потребител с такъв емейл"})
              }
            }
        });
      }
    });
   

    module.exports = router;