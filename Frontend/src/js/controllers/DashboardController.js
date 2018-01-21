// controller.js
angular
.module('app')
.controller('DashboardController', DashboardController)

DashboardController.$inject = ['$scope', '$http', 'Notification'];
function DashboardController($scope, $http, Notification) {
  $scope.name = "Joseph";
  $scope.number = 4;

  $scope.receipts = [
    {
      'businessName': 'CVS',
      'amount': 9.00,
      'itemName': 'Toothbrush',
      'date': '01/30/18 10:25'
    },
    {
      'businessName': 'McDonalds',
      'amount': 5.00,
      'itemName': 'Food',
      'date': '01/02/18 14:01'
    },
    {
      'businessName': 'Barnes and Noble',
      'amount': 7.00,
      'itemName': 'CORS for Dummies',
      'date': '01/15/18 4:01'
    },
    {
      'businessName': 'Toys R Us',
      'amount': 6800.00,
      'itemName': 'Unicycle',
      'date': '02/20/18 20:25'
    }
  ];

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

    // $http({
    //   url: url,
    //   method: 'GET',
    //   headers: {'Content-Type': 'text/plain; charset=utf-8'}
    // })
    $http.get(url)
      .then(response => {
        console.log(response);
        Notification.success({message: 'Success!'});
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Error!'});
      });
  }

  // $scope.search = function(string) {
  //   var searchArray = [];
  //   $scope.receipts.forEach(rec => {
  //     if(rec.businessName.contains(string) || rec.itemName.contains(string)) {
  //       searchArray.push[];
  //     }
  //   });

  // }
}