var express = require('express');
var router = express.Router();
var sha1 =require("sha1");

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  function isValidString(str) {
    return (typeof str === 'string' && str.length > 0);
  };
  const PASS_LENGHT = 8;
  
  function isValidPassword(pass) {
    return (typeof pass === 'string' && pass.length >= PASS_LENGHT)
  };

  router.post('/', function(res, req, next){
    res.setHeader('content-type', 'aplication/json');
    var userCollection = req.db.get('users');
    var logedUser = req.body;

    if(!(isValidPassword(newUser.email)) && !(isValidPassword(newUser.password)) 
        && !(isValidString(newUser.firstname)) && !(isValidString(newUser.lastname))){
        res.status(200);
        res.json({massages:"invalid data"});
    } else {
        logedUser.password=sha1(logedUser.password);
        userCollection.find({email:logedUser.email,password:logedUser.password}, {},function(err, docs){
            if(err){
                res.status(500);
                res.json({err:err});
            }
            if(docs.length===0){
                res.status(200);
                res.json({massages:"not find user"});
                res.redirect('login.html');
            } else {
                req.session.user = docs[0];
                res.json({id: doc[0]._id});
            }
        });
    }
  });

  module.exports = router;