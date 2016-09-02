
var indexModule = angular.module("indexModule",[]);
indexModule.controller("indexController", function ($scope,$http,$rootScope,$location) {
    //用户名
    $scope.getSession=function(){
        $http.get("/users/getSession").success(function(data){
            if(data){
                //console.log("三上哪"+isLogin[0].u_name);
                //$scope.isLogin[0].u_name=true;
                $scope.isLogin=true;
                $scope.users=data;
                $rootScope.naname=$scope.users
            }else{
                //$scope.isLogin[0].u_name=false;
                $scope.isLogin=false;
            }
        })
    };
    $scope.getSession();
    ////一个商品
    $scope.shop=function(id){
        //console.log(id);
        $rootScope.shopid=id;
        $location.path("/pariticular");
    };

    //查询所有商品
    $scope.init=function(){
        $http.get("/product/chaXun").success(function(data){
            //$scope.productAll=[data];
            //console.log(222);
            $scope.data=data;
            //console.log(data.p_img_item1ta);
            //console.log( $scope.productAll);
        })
    };

$scope.init();


});