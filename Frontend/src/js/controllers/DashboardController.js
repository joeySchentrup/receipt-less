// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http'];
function DashboardController($scope, $http) {
  $scope.name = "Joseph";
}