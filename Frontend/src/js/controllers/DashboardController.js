// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http'];
function DashboardController($scope, $http) {
  $scope.name = "Joseph";
  $scope.number = 4;

  $scope.getNumber = function(num) {
      return new Array(num);   
  }
}