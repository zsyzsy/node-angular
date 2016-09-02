/**
 * Created by Administrator on 15-11-16.
 */
var studentDAO = require("../dao/studentDAO");
//查询
exports.chaXun=function(func){
    studentDAO.findAll(function(r){
        func(r);
    })
};
//增加
exports.addAll=function(data,func){
    studentDAO.addAll(data,function(){
        func();
    })
};
//删除
exports.delStudent=function(id,func){
    studentDAO.delStudent(id,function(){
        func() ;
    })
};
//修改
exports.showById=function(id,func){
    studentDAO.findById(id,function(r){
        func(r) ;
    })
};
exports.update=function(data,func){
    studentDAO.update(data,function(){
        func() ;
    })
};
//搜索
exports.search=function(type,vaule,func){
    if(type=="name"){
        studentDAO.findByName(vaule,function(r){
            func(r);
        })
    }else if(type=="age"){
        studentDAO.findByAge(vaule,function(r){
            func(r);
        })
    }else if(type=="sex"){
        studentDAO.findBySex(vaule,function(r){
            func(r);
        })
    }
};
















