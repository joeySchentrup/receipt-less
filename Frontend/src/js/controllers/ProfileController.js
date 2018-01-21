// controller.js
angular
.module('app')
.controller('ProfileController', ProfileController)

ProfileController.$inject = ['$scope', '$http'];
function ProfileController($scope, $http) {
  $scope.first_name = "Joseph";
  $scope.last_name = "Cacioppo";
  $scope.email = "jmcacioppo@ufl.edu";
  $scope.phone_number = 3057947034;
}