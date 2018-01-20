// controller.js
angular
.module('app')
.controller('dashboardCtrl', dashboardCtrl)

dashboardCtrl.$inject = ['$scope', '$http'];
function dashboardCtrl($scope, $http) {
  $scope.name = "Joseph";
}