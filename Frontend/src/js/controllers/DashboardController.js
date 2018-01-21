// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http', 'Notification', 'TransferService'];
function DashboardController($scope, $http, Notification, TransferService) {
  $scope.user = TransferService.getUser();
  $scope.searchText = "";
  $scope.receipts = [];
  $scope.currentReceipts = [];

  $scope.sortNames = [
      {
        'name': 'Business Name'
      }, 
      {
        'name': 'Highest to Lowest Price',
      },
      {
        'name': 'Item Name'
      },
      {
        'name': 'Least Recent'
      },
      {
        'name': 'Lowest to Highest Price',
      },
      {
        'name': 'Most Recent'
      }
  ];

  $scope.sortChoice = 'businessName';
  $scope.sortBool = false;

  // Sort Values on change
  $scope.sort = function(selection) {
    if($scope.selected.name === 'Business Name') {
      $scope.sortChoice = 'businessName';
      $scope.sortBool = false;
    }
    else if($scope.selected.name === 'Highest to Lowest Price') {
      $scope.sortChoice = 'amount';
      $scope.sortBool = true;
    }
    else if($scope.selected.name === 'Item Name') {
      $scope.sortChoice = 'itemName';
      $scope.sortBool = false;
    }
    else if($scope.selected.name === 'Least Recent') {
      $scope.sortChoice = 'date'; 
      $scope.sortBool = false;
    }
    else if($scope.selected.name === 'Lowest to Highest Price') {
      $scope.sortChoice = 'amount';
      $scope.sortBool = false;
    }
    else if($scope.selected.name === 'Most Recent') {
      $scope.sortChoice = 'date'; 
      $scope.sortBool = true;
    }
  }

  // Function to get all user info
  var userInfo = function() {
    var email = $scope.user.email;
    var username = email.substr(0, email.indexOf('@'));

    var url = 'http://165.227.206.185:8000/receipts/' + username;

    $http.get(url)
      .then(response => {
        var current = {};

        for(var i = 0; i < response.data.length; i++) {
            current = {};
            current.businessName = response.data[i].business_name; 
            current.itemName = response.data[i].item_name;
            current.amount = response.data[i].amount;
            current.date = response.data[i].date_and_time;
            $scope.currentReceipts.push(current);
        }

        this.receipts = this.currentReceipts;
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Error!'});
      });
  }

  userInfo();

  // Search receipt items
  $scope.search = function(str) {
    var searchArray = [];

    $scope.currentReceipts.forEach(rec => {
      if(rec.businessName.includes(str) || rec.itemName.includes(str)) {
        searchArray.push(rec);  
      }
    });

    $scope.currentReceipts = searchArray;
  }
}