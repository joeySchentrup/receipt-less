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

  //$scope.selectedName = 'Sort Business Name';
  $scope.sortChoice = 'businessName';
  $scope.sortBool = false;

  $scope.getNumber = function(num) {
    return new Array(num);   
  }

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