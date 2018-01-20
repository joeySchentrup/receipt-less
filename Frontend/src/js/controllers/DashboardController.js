// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http'];
function DashboardController($scope, $http) {
  $scope.name = "Joseph";
  $scope.number = 4;
  $scope.names = ['Sort Ascending', 'Sort Decending', 'Sort Date', 'Sort Price']
  $scope.selectedName = 'Sort Date';

  $scope.getNumber = function(num) {
      return new Array(num);   
  }
}