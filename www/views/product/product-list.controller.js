/**
 * Created by Administrator on 2017/10/13.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter',function ($scope,$ionicLoading,$timeout,$filter) {
      $scope.products = [];
      $scope.searchMV = {
        content:''
      };
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中，请稍后......',
        });
        $timeout(function() {
          $ionicLoading.hide();
          $scope.products = [
            {
              ID:1
              ,Images:['views/product/image/1.jpg']
              ,Name:'iphone7'
              ,Store:12
              ,Barcode:'121212'
            }
            ,{
              ID:2
              ,Images:['views/product/image/2.jpg']
              ,Name:'note8'
              ,Store:120
              ,Barcode:'1212131312'

            }
            ,{
              ID:3
              ,Images:['views/product/image/3.jpg']
              ,Name:'mix2'
              ,Store:131
              ,Barcode:'12115164212'
            }
          ];
          $scope.sourceProducts = angular.copy($scope.products)
        }, 2000);



      });
      $scope.getByName = function () {
        $scope.products = $filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });

      };
    }]);

}());
