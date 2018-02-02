// controller.js
angular
.module('app')
.controller('ProfileController', ProfileController)

ProfileController.$inject = ['$scope', '$http', 'Notification', 'TransferService'];
function ProfileController($scope, $http, Notification, TransferService) {
  $scope.user = TransferService.getUser();

  $scope.saveChanges = () => {
    var id = $scope.user._id;
    var url = 'http://receiptlessbackend.ddns.net:8000/account/' + id;

    $http.post(url, $scope.user, {})
      .then(res => {
          Notification.success({ message: 'Edit profile successful!' });
      })
      .catch(function(err) {
        console.log(err);
        Notification.error({message: 'Edit profile failed.'});
      });
  }
}