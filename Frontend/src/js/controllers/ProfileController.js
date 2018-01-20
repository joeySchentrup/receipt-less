// controller.js
angular
.module('app')
.controller('ProfileController', ProfileController)

ProfileController.$inject = ['$scope', '$http'];
function ProfileController($scope, $http) {
  $scope.name = "Joseph";
}