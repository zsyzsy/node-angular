/**
 * Created by Administrator on 15-11-20.
 */
var loginModule = angular.module("loginModule",[]);
loginModule.controller("loginController", function ($scope,$http,$rootScope,$location) {
    $scope.login = function () {

        $http.post("/users/login",{name:$scope.username,pwd:$scope.password})
            .success(function (data) {
                $rootScope.userid=data[0].u_id;
                //console.log(data[0].u_id);
                if(data[0].u_id){
                    alert("登陆成功!");
                    $location.path("/index");
                }else{
                    alert("登陆失败!");
                }
            });
    };
});
