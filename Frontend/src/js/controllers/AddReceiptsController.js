// controller.js
angular
.module('app')
.controller('AddReceiptsController', AddReceiptsController)

AddReceiptsController.$inject = ['$scope', '$http', 'Notification', '$stateParams'];

function AddReceiptsController($scope, $http, Notification, $stateParams) {
  $scope.user = $stateParams.user;
  $scope.numOfRows = 1;
  
  $scope.addReceipt = () => {
    Notification.success({ message: 'Add receipt successful!' });
  }

  $scope.addItem = () => {
    $scope.numOfRows += 1;
  }

  $scope.getNumber = function(num) {
    return new Array(num);   
  }
}