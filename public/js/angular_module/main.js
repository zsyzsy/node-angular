/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","regModule","loginModule","indexModule","fenleiModule","pariticularModule","shopModule"]);
mainApp.config(["$routeProvider", function ($routeProvider) {
    //注册
    $routeProvider.when("/reg",{templateUrl:"js/modules/reg/reg.html",controller:"regController"});
    //登录
    $routeProvider.when("/login",{templateUrl:"js/modules/login/login.html",controller:"loginController"});
    //首页
    $routeProvider.when("/index",{templateUrl:"js/modules/index/index.html",controller:"indexController"});
    //分类
    $routeProvider.when("/fenlei/:name",{templateUrl:"js/modules/fenlei/fenlei.html",controller:"fenleiController"});
    //详细
    $routeProvider.when("/pariticular",{templateUrl:"js/modules/pariticular/pariticular.html",controller:"pariticularController"});
    //购物车
    $routeProvider.when("/shop",{templateUrl:"js/modules/shop/shop.html",controller:"shopController"});
    $routeProvider.otherwise({
        redirectTo:"/login"
    })
}]);