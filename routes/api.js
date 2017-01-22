var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Data = require('../models/data');

/* GET api listing. */

router.get('/', function(req, res, next) {
    data = 'Hi, your currently using the IoT API, please follow the instructions on github'
    res.send(JSON.stringify(data, undefined, 2));
});


router.get('/user', function(req, res, next) {
    User.find(function(err, users){
        res.send(JSON.stringify(users, undefined, 2));
    });

});

/* make a /data get without group ID to give instructions */


router.get('/data/:group_id', function(req, res, next) {
    var group_id = req.params.group_id;
    var object_id;
    User.find({group_id : group_id})
        .then(function(user){
            object_id = user[0]._id;
            Data.find({user : object_id})
                .then(function(docs){
                   return res.send(JSON.stringify(docs, undefined, 2));
                })
        }).catch(function(e){
           return  res.send(e);
    });
});

router.post('/user', function(req,res,next){
    var user = new User(req.body);
    user.save().then(function(user) {
        res.send('Group registered successfully ');
    }).catch(function(e){
        res.status(400).send(e);
    });
});

/* error handling for wrong group id is not proper */
router.post('/data/:group_id', function(req,res,next){
    var group_id = req.params.group_id;
    User.find({group_id : group_id})
        .then(function(user){
            var object_id = user[0]._id;
            var datas = req.body;
            var data = new Data({
                user: object_id,
                value: datas.value,
                valueString : datas.valueString,
                sensorStatus : datas.sensorStatus,
                timeStamp : new Date().toJSON(),
                JsonObj : datas.JsonObj
            });
            return data.save();
        })
        .then(function(data){
            return res.send('Data Saved');
        })
    .catch(function(e){
        return res.send(e);
    });
});


module.exports = router;
