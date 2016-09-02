/**
 * Created by Administrator on 2015/12/8.
 */
var express = require('express');
var router = express.Router();
var pariticularService = require("../service/pariticularService");
//查询所有商品
router.post("/xianshi",function(req,res,next){
    var id=req.body.id;
    pariticularService.chaxun(id,function(data){
        res.json(data);
        //console.log(data);
    })
});
//添加评论
router.post('/addPL',function(req,res,next){
    var data=[req.body.text,req.body.dan,req.body.shopid,req.body.userid];
    //var users=req.session.users;
    pariticularService.pingLu(data,function(){
        res.send("添加成功");
    });
});
//查询所有评论
router.post("/PLChaXun",function(req,res,next){
    pariticularService.chaXun(req.body.shopid,function(data){
        //console.log(data);
        res.json(data);
    })
});

//购物车添加
router.post('/addGU',function(req,res,next){
    var data1=[req.body.shuLiangid,req.body.shopid,req.body.userid];
    pariticularService.tj(data1,function(){
        res.send("添加成功");
    });
});



module.exports = router;