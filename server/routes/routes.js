var express = require('express');
var router = express.Router();
var User = require('../../models/User');

router.get('/', function(req, res){
    res.render('index')
});


//endpoint template

router.route('/testPost').post((req,res) => {
    console.log(req.body);
    res.send({success: "nice"});
    //model.save((err) => {
    //  res.send('success');
    // })
});

router.route('/addUser').post((req, res) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    console.log("USER", req.body);
    console.log("REQ", user);



    user.save((err) => {
        if (err) res.send(err);
        res.send({success: "user added!"});
    })
});



module.exports = router;
