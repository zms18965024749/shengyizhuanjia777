(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function($scope,localStorageService,$state){
    $scope.shop = {};

    $scope.editShop = function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop = localStorageService.get('Shop',{
        phone:'18965024749',
        createTime:'2017-9-27 17:10:45'
      });
    });
  }]);
})();
