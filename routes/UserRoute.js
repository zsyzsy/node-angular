var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */
router.post('/validateName', function(req, res, next) {
  userService.validateName(req.body.name,function(isUse){
     res.send(isUse);
  });
});
//注册
router.post('/reg',function(req,res,next){
    var data=[req.body.name,req.body.pwd];
    userService.reg(data,function(){
        res.send("注册成功");
    });
});
//登录
router.post('/login',function(req,res,next){
    userService.log(req.body.name,req.body.pwd,function(isLogin){
        if(isLogin.length>0){
            //登录成功时，将用户信息存放到session中
            req.session.users=isLogin[0].u_name;
            req.session.userid=isLogin[0].u_id;
        }
        res.send(isLogin);
        //console.log("djf1113guf"+req.session.userid)
    })
});
//取session
router.get('/getSession',function(req,res,next){
    var users=req.session.users;
    //userService.reg(data,function(){
        res.send(users);
    //console.log(users);
    //});
});
module.exports = router;
