// controller.js
angular
.module('app')
.controller('ExpensesController', ExpensesController)

ExpensesController.$inject = ['$scope', '$http'];
function ExpensesController($scope, $http) {
  $scope.name = "Joseph";

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
}