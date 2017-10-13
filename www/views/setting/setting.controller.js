(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','$ionicHistory','$state',function ($scope,$ionicHistory,$state) {
    $scope.goBack = function () {
      $ionicHistory.nextViewOptions({
        disableBack:true
      });
      $state.go('app.home');

    };
    $scope.shop = {
      shopPhone:'18965024749'
    };
    $scope.callPhone = function () {
      location.href = 'tel:' + $scope.shop.shopPhone;
    };
    $scope.logout = function () {

49465161981651498

    };

  }]);

})();
