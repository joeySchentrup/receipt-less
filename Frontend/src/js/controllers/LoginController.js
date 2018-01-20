// controller.js
angular
.module('app')
.controller('LoginController', LoginController)

LoginController.$inject = ['$scope', '$http'];
function LoginController($scope, $http) {
  $scope.name = "Joseph";
}