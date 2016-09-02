/**
 * Created by Administrator on 2015/12/10.
 */
var express = require('express');
var router = express.Router();
var shopService = require("../service/shopService");
//购物车查询
router.post('/cxGU',function(req,res,next){
    shopService.cx(req.body.userid,function(data){
            //console.log(data);
            res.json(data);
        })
});



module.exports = router;