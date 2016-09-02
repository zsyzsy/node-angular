/**
 * Created by Administrator on 2015/12/7.
 */
var express = require('express');
var router = express.Router();
var productService = require("../service/productService");
//查询所有商品
router.get("/chaXun",function(req,res,next){

    productService.chaXun(function(data){
        //console.log(data);
        res.json(data);
        //console.log(data);
    })
});
//查询商品的id
router.post("/xx/:id",function(req,res,next){
    var id=req.params.id;
    productService.xx(id,function(data){
        res.json(data);
        console.log(data);

    })
});





module.exports = router;