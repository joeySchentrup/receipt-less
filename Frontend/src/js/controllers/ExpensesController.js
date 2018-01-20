// controller.js
angular
.module('app')
.controller('ExpensesController', ExpensesController)

ExpensesController.$inject = ['$scope', '$http'];
function ExpensesController($scope, $http) {
  $scope.name = "Joseph";

  $scope.labels = ["Groceries", "Movies", "School"];
  $scope.data = [300, 500, 100];
}