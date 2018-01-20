// controller.js
angular
.module('app')
.controller('AddReceiptsController', AddReceiptsController)

AddReceiptsController.$inject = ['$scope', '$http', 'Notification'];

function AddReceiptsController($scope, $http, Notification) {
  $scope.name = "Joseph";

  $scope.addReceipt = () => {
    Notification.success({ message: 'Add receipt successful!' });
  }

}