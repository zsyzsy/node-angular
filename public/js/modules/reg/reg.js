/**
 * Created by Administrator on 15-11-20.
 */
var regModule = angular.module("regModule",[]);
regModule.controller("regController", function ($scope,$http,$location) {
    //用户名验证
    $scope.blurUsername = function () {
        if($scope.username && /^[0-9a-zA-Z]{3,20}$/.test($scope.username)){
            $http.post("/users/validateName",{name:$scope.username}).success(function(data){
                console.log($scope.username);
                if(data == 'true'){
                    $scope.userLabel = "正确";
                    $scope.userColor = "green";
                }else{
                    $scope.userLabel = "用户名不正确或已存在";
                    $scope.userColor = "red";
                }
            });
        }
    };
    //密码验证
    $scope.blurPwd = function () {
        if($scope.password && /^.{6,}$/.test($scope.password)){
            $scope.pwdLabel = "正确";
            $scope.pwdColor = "green";
        }else{
            $scope.pwdLabel = "格式不正确";
            $scope.pwdColor = "red";
        }
    };
    //再次输入密码
    $scope.blurcofig=function(){
        //alert(1);
        if($scope.cofig==$scope.password){
            $scope.cofigLabel = "输入正确";
            $scope.cofigColor = "green";
        }else{
            $scope.cofigLabel = "输入密码不一致";
            $scope.cofigColor = "red";
        }
    };
    //验证码
    $scope.bluryan=function(){
        alert(1);
        if($scope.yan==8389){
            $scope.yanLabel = "输入正确";
            $scope.yanColor = "green";
        }else{
            $scope.yanLabel = "输入密码不一致";
            $scope.yanColor = "red";
        }
    };
    //注册功能
    $scope.reg = function () {

        if($scope.userColor = "green" && $scope.pwdColor == "green"){
            $http.post("/users/reg",{
                name:$scope.username,
                pwd:$scope.password
            }).success(function () {
                    $location.path("/login");

            });

        }
    }
});