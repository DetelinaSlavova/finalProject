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
  return (typeof pass === 'string' && pass.length >= PASS_LENGHT && pass.trim().length>0)
};

function isValidPhoneNumber(phone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone));
}

/* GET users listing. */

router.get('/', function (req, res) {
    var db = req.db;
    var usersCollection = req.db.get('user');
    var idToSearch = req.params.id;

    usersCollection.find({}, {}, function(err, result){
        if(err){
            res.status(500);
            res.json({err})
        }else{
            res.status(200);
            res.json(result);
        }
    });
// 

//   usersCollection.find({ _id: idToSearch}, {}, function (err, docs) {
//       if (err) {
//           res.status(500);
//           res.json(err);
//       } else {
//           var user = docs[0];
//           delete user.password;
//           res.status(200);
//           res.json(docs);
//           console.log(docs)
//       }
//   });
});

module.exports = router;
