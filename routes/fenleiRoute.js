/**
 * Created by Administrator on 2015/12/8.
 */
var express = require('express');
var router = express.Router();
var fenleiService = require("../service/fenleiService");
//查询分类的商品
router.post("/chaXun",function(req,res){
    var name=req.body.name;
    //console.log(req.body.name);
    fenleiService.chaXun(name,function(data){
        if(data.length>0){
            //登录成功时，将用户信息存放到session中
            req.session.users=data[0];
            //console.log(data[0]);
        }

        res.send(data);

    })
});

//查询商品的id
router.post("/fenLeiXX/:id",function(req,res,next){
    var id=req.params.id;
    fenleiService.xx(id,function(data){
        res.json(data);
        console.log(data);

    })
});

module.exports = router;
