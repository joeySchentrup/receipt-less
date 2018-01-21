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
      'amount': 5.00,
      'itemName': 'Toothbrush',
      'date': '1/20/18 10:25'
    },
    {
      'businessName': 'Chipotle',
      'amount': 9.00,
      'itemName': 'Food',
      'date': '1/2/18 4:01'
    },
    {
      'businessName': 'Toys R Us',
      'amount': 6800.00,
      'itemName': 'Unicycle',
      'date': '1/30/18 20:25'
    }
  ];

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