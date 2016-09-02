//加载模块
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session'); //加载session模块

//加载路由
var userRoute = require('./routes/UserRoute');
var productRoute = require('./routes/productRoute');
var fenleiRoute = require('./routes/fenleiRoute');
var pariticularRoute = require('./routes/pariticularRoute');
var shopRoute = require('./routes/shopRoute');

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"lovo", //加密的随机串
  //cookie:{maxAge:60 * 60 * 1000},
  resave:false,
  saveUninitialized:true

}));
//设置静态目录
app.use(express.static(path.join(__dirname,'public')));
//
app.use('/users', userRoute);
app.use('/product', productRoute);
app.use('/fenlei', fenleiRoute);
app.use('/pariticular', pariticularRoute);
app.use('/shop', shopRoute);



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务器已启动，监听地址为：http://%s:%s', host, port);
});


// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//app.use(function(err, req, res, next) {
//  if(req.url!=""){
//    res.status(err.status||500);
//    res.render('error')
//  }
//});



module.exports = app;
