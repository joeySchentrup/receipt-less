// controller.js
angular
.module('app')
.controller('ExpensesController', ExpensesController)

ExpensesController.$inject = ['$scope', '$http', 'TransferService'];
function ExpensesController($scope, $http, TransferService) {
  $scope.user = TransferService.getUser();

  $scope.pieLabels = ["Groceries", "Movies", "School"];
  $scope.pieData = [300, 500, 100];

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Groceries', 'Movies', 'School'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [14, 15, 52, 52, 64, 21, 11]
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
}

     