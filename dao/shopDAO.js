/**
 * Created by Administrator on 2015/12/10.
 */
var db = require("./database");
//购物车查询
exports.cx=function(userid,func){
    db.query("select * from t_shop_car m,t_product u where m.sc_p_id=u.p_id and m.sc_u_id=?",[userid],function(r){
        //console.log(r);
        func(r);
    })
};