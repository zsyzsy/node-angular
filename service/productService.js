/**
 * Created by Administrator on 2015/12/7.
 */
var productDAO = require("../dao/productDAO");
//查询所有商品
exports.chaXun=function(func){
    productDAO.All(function(r){
        func(r);
    })
};
//详细
exports.xx=function(id,func){
    productDAO.xiangxi(id,function(r){
        func(r);

    })
};

