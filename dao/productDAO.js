/**
 * Created by Administrator on 2015/12/7.
 */
var db = require("./database");
//查询所有商品
exports.All=function(func){
    db.query("select * from t_product",function(r){
        func(r);
    });
};
//详细
exports.xiangxi=function(id,func){
    //console.log(id);
    db.query("select * from t_product  where p_id=? ",[id],function(r){
        func(r);
    });
};
