// controller.js
angular
.module('app')
.controller('ProfileController', ProfileController)

ProfileController.$inject = ['$scope', '$http', 'TransferService'];
function ProfileController($scope, $http, TransferService) {
  $scope.user = TransferService.getUser();
}