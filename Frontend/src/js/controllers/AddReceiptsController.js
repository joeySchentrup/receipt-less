// controller.js
angular
.module('app')
.controller('AddReceiptsController', AddReceiptsController)

AddReceiptsController.$inject = ['$scope', '$http', 'Notification', '$stateParams'];

function AddReceiptsController($scope, $http, Notification, $stateParams) {
  $scope.user = $stateParams.user;
  $scope.numOfRows = 1;
  $scope.businessName = "";
  $scope.itemName = "";
  $scope.price = "";
  $scope.date = "";
  
  $scope.addReceipt = () => {
    var url = 'http://165.227.206.185:8000/receipts/jose13651';
    var cur = {};
    cur._id = '25';
    cur.business_name = $scope.businessName;
    cur.date_and_time = $scope.date;
    cur.amount = 15.42;
    cur.item_name = $scope.itemName;
    console.log(cur);
    $http.post(url, cur, {})
      .then(res => {
          console.log(res);
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Error!'});
      });
    Notification.success({ message: 'Add receipt successful!' });
  }

  $scope.addItem = () => {
    $scope.numOfRows += 1;
  }

  $scope.getNumber = function(num) {
    return new Array(num);   
  }
}