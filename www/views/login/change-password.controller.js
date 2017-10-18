(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ChangePasswordCtrl',['$scope','localStorageService','$ionicPopup','$state',function ($scope,localStorageService,$ionicPopup,$state) {
      $scope.user={
        oldPassword:'',
        password:'',
        confirmPassword:''
      };

      $scope.save =function () {
        var account = localStorageService.get('user');
        if (account.password == $scope.user.oldPassword) {
          account.password=$scope.user.password;
          localStorageService.update('user', account);
          $state.go('login');
        }
        else {
          $ionicPopup.alert({
            title: '警告',
            template: '密码不正确',
            okText: '确定',
            okType: 'button-energized'
          });
        }
      }
    }])

})()
