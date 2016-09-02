/**
 * Created by Administrator on 2015/12/10.
 */
var shopModule = angular.module("shopModule",[]);
shopModule.controller("shopController", function ($scope,$http,$rootScope){
    //用户名
    $scope.getSession=function(){
        $http.get("/users/getSession").success(function(data){
            //console.log(data);
            if(data){
                $scope.isLogin=true;
                $scope.users=data;
            }else{
                $scope.isLogin=false;
            }
        })
    };
    $scope.getSession();
    //购物车查询
    $scope.init=function(){
        $http.post("/shop/cxGU",{
            userid: $rootScope.userid
        }).success(function(data){
            //console.log(data);
        });
    };
    $scope.init();

});
