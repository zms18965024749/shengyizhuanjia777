(function () {
  'use strict'
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService',function ($scope,CategoryService) {
    $scope.product = {
      ID:0,
      Name:'',
      CategoryID:6,
      Category:{
        ID:6,
        Name:CategoryService.activeCategory.Name
      }
    };
    $scope.$on('CategoryUpdate',function (event,date) {
      console.log(date);
      $scope.product.CategoryID = CategoryService.activeCategory.ID;
      $scope.product.Category.ID = CategoryService.activeCategory.ID;
      $scope.product.Category.Name = CategoryService.activeCategory.Name;
    });

  }]);
})();
