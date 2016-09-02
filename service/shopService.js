/**
 * Created by Administrator on 2015/12/10.
 */
var shopDAO = require("../dao/shopDAO");
//购物车查询
exports.cx=function(userid,func){
    shopDAO.cx(userid,function(r){
        func(r);
    })
};