/**
 * Created by Administrator on 2015/12/8.
 */
var pariticularDAO = require("../dao/pariticularDAO");
//根据id查询商品
exports.chaxun = function(id,func){
    pariticularDAO.All(id,function(r){
        func(r);
    })
};
//添加评论
exports.pingLu=function(data,func){
    pariticularDAO.add(data,function(){
        func();
    })
};
//查询所有评论
exports.chaXun=function(shopid,func){
    pariticularDAO.all(shopid,function(r){
        func(r);
    })
};

//购物车添加
exports.tj=function(data1,func){
    pariticularDAO.tj(data1,function(){
        func();
    })
};