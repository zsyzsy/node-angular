/**
 * Created by Administrator on 2015/12/8.
 */
var fenleiModule = angular.module("fenleiModule",[]);
fenleiModule.controller("fenleiController", function ($scope,$http,$routeParams,$rootScope,$location) {
    //console.log($routeParams.name);
    //通过连接查找
    var name=$routeParams.name;
    $scope.init=function(){
        $http.post("/fenlei/chaXun",{name:name}).success(function(data){
            //console.log(data);
            $scope.data=data;


        })
    };
    $scope.init();
////一个商品
    $scope.shoping=function(id){
        //console.log(id);
        $rootScope.shopid=id;
        $location.path("/pariticular");
    };
    $scope.userss=$rootScope.naname;
    console.log("我是是"+$scope.userss);

    //用户名
    //$scope.getSession=function(){
    //    $http.get("/users/getSession").success(function(data){
    //        //console.log(data);
    //        if(data){
    //            $scope.isLogin=true;
    //            $scope.users=data;
    //        }else{
    //            $scope.isLogin=false;
    //        }
    //    })
    //};
    //$scope.getSession();
});