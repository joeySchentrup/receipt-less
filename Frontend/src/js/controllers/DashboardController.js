// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http', 'Notification'];
function DashboardController($scope, $http, Notification) {
  $scope.name = "Joseph";
  $scope.number = 4;

  $scope.receipts = [];
  $scope.currentReceipts = [];

  $scope.businessName = "CVS"

  $scope.names = ['Sort Ascending', 'Sort Descending', 'Sort Date', 'Sort Price']
  $scope.selectedName = 'Sort Date';
  $scope.sortChoice = 'amount';

  $scope.getNumber = function(num) {
    return new Array(num);   
  }

  $scope.sort = function(selection) {
    if(selection = 'Sort Ascending') $scope.sortChoice = 'businessName';
    else if(selection = 'Sort Descending') $scope.sortChoice = 'itemName';
    else if(selection = 'Sort Date') $scope.sortChoice = 'date';
    else if(selection = 'Sort Price') $scope.sortChoice = 'amount';
  }

  $scope.test = function() {
    var url = 'http://165.227.206.185:8000/account/jos1@ufl.edu';
    $http.get(url)
      .then(response => {
        $scope.receipts = response.data;
        $scope.currentReceipts = response.data;
        Notification.success({message: 'Success!'});
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Error!'});
      });
  }

  $scope.search = function(str) {
    var searchArray = [];
    $scope.receipts.forEach(rec => {
      if(rec.businessName.contains(str) || rec.itemName.contains(str)) {
        searchArray.push[];
      }
      $scope.currentReceipts = searchArray;
    });

  }
}