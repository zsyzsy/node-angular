/**
 * Created by Administrator on 2015/12/8.
 */
var fenleiDAO = require("../dao/fenleiDAO");
//查询所有鞋的商品
exports.chaXun=function(name,func){
    fenleiDAO.fenlei(name,function(r){
        func(r);
    })
};
//详细
exports.xx=function(id,func){
    fenleiDAO.xiangxi(id,function(r){
        func(r);

    })
};
////查询所有衣的商品
//exports.chaXun=function(func){
//    fenleiDAO.fenlei(function(r){
//        func(r);
//    })
//};
////查询所有裤的商品
//exports.chaXun=function(func){
//    fenleiDAO.fenlei(function(r){
//        func(r);
//    })
//};