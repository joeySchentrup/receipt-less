// controller.js
angular
.module('app')
.controller('AddReceiptsController', AddReceiptsController)

AddReceiptsController.$inject = ['$scope', '$http'];
function AddReceiptsController($scope, $http) {
  $scope.name = "Joseph";
}