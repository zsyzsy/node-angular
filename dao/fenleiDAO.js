/**
 * Created by Administrator on 2015/12/8.
 */
var db = require("./database");
//模糊查询，以鞋结束的
exports.fenlei=function(data,func){

    db.query("select * from t_product a where a.p_name like '%"+data+"' ",[],function(r){
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
