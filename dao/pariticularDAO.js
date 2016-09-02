/**
 * Created by Administrator on 2015/12/8.
 */
var db = require("./database");
//根据id查询商品
exports.All=function(id,func){
    db.query("select * from t_product  where p_id=? ",id,function(r){
        //console.log(r);
        func(r);

    });
};
//添加评论
exports.add=function(data,func){
    db.query("insert into t_message(m_content,m_date,m_u_id,m_p_id) values(?,?,?,?)",data,function(){
        func();
    });
};
//查询所有评论
exports.all=function(shopid,func){
    db.query("select * from t_message m,t_user u where m.m_u_id=u.u_id and m.m_p_id=? ",[shopid],function(r){
        //console.log(r);
        func(r);
    });
};

//购物车添加
exports.tj=function(data1,func){
    //console.log(data1);
    db.query("insert into t_shop_car(sc_count,sc_p_id,sc_u_id) values(?,?,?)",data1,function(){
        func();
    })
};