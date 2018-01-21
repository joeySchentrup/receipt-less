// controller.js
angular
.module('app')
.controller('AddReceiptsController', AddReceiptsController)

AddReceiptsController.$inject = ['$scope', '$http', 'Notification', 'TransferService'];

function AddReceiptsController($scope, $http, Notification, TransferService) {
  $scope.user = TransferService.getUser();
  $scope.numOfRows = 1;
  $scope.businessName = "";
  $scope.itemName = "";
  $scope.price = 0;
  $scope.date = "";
  
  $scope.addReceipt = () => {
    var email = $scope.user.email;
    var username = email.substr(0, email.indexOf('@'));

    var url = 'http://165.227.206.185:8000/receipts/' + username;
    var cur = {};
    cur._id = '25';
    cur.business_name = $scope.businessName;
    cur.date_and_time = $scope.date;
    cur.amount = parseFloat($scope.price);
    cur.item_name = $scope.itemName;
    
    $http.post(url, cur, {})
      .then(res => {
          Notification.success({ message: 'Add receipt successful!' });

          $scope.businessName = "";
          $scope.itemName = "";
          $scope.price = 0;
          $scope.date = "";
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Error!'});
      });
  }

  $scope.addItem = () => {
    $scope.numOfRows += 1;
  }

  $scope.getNumber = function(num) {
    return new Array(num);   
  }
}