/**
 * Created by Administrator on 2015/12/8.
 */
var pariticularModule = angular.module("pariticularModule",[]);
pariticularModule.controller("pariticularController", function ($scope,$http,$rootScope,$location) {
    //用户名
    $scope.getSession=function(){
        $http.get("/users/getSession").success(function(data){
            //console.log(11111111111111);
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
    //获取商品id，在页面显示相应的图片
    $scope.SL=function(){
        //console.log("哈哈哈哈 "+$rootScope.shopid);
        //$scope.xiangxi=$rootScope.shopid;
        //console.log($scope.xiangxi);
        $http.post("/pariticular/xianshi",{id: $rootScope.shopid}).success(function(data){
            $scope.data=data;
            //console.log(data);

            //数据的分隔
            //$scope.xiangxi22=data[0].p_img_item2.split(',')[0]
        })
    };
    $scope.SL();

    //查询评论
    $scope.init=function(){
        //var userid = req.session.userid;
        $http.post("/pariticular/PLChaXun",{
            shopid: $rootScope.shopid
        }).success(function(data){
            $scope.data1=data;
        })
    };
    $scope.init();

    //添加评论
    $scope.plBtn=function(){
        if(document.getElementById("hidd").style.display=="block"){
            var datetime=new Date();
            datetime=new Date(datetime).pattern("yyyy-MM-dd HH:mm:ss");
            document.getElementById("hidd").style.display="none";
            $http.post("/pariticular/addPL",{text:$scope.txt,dan:datetime,shopid: $rootScope.shopid,userid:$scope.userid})
                .success(function(){
                $scope.init();
            })
        }else{
            document.getElementById("hidd").style.display="block";
        }
    };


    //添加数量
    $scope.shuLiang = 1;
    $scope.addbtn=function(){
        //$scope.shuliang=$scope.shuliang.val()+1
         $scope.money = parseInt( $scope.shuLiang);
         $scope.money++;
        $scope.shuLiang = $scope.money;
        //$scope.money = $scope.shuLiang;
        $rootScope.shuLiangid=$scope.shuLiang;
        //console.log( "商品id数量"+$rootScope.shuLiangid);
    };
    //删除数量
    $scope.upBtn=function(){
        $scope.suLiang=parseInt( $scope.shuLiang);
        if( $scope.suLiang>0){
            $scope.suLiang--;
            $scope.shuLiang= $scope.suLiang;
        }else{
            $scope.shuLiang=0;
        }
        $rootScope.shuLiangid=$scope.shuLiang;
        //console.log( "商品id数量"+$rootScope.shuLiangid);
    };
    //立即购买
    $scope.goumaiBtn=function(){
        $location.path("/shop");
    //    $scope.tjgw();
    };
    //添加购物车
    $scope.tjgw=function(){
        $http.post("/pariticular/addGU",{shuLiangid:$rootScope.shuLiangid,shopid: $rootScope.shopid,userid:$scope.userid})
            .success(function(){
            })
    };
    $scope.tjgw();
});