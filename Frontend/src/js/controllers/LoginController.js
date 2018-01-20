// controller.js
angular
.module('app')
.controller('LoginController', LoginController)

LoginController.$inject = ['$scope', '$http', '$state', 'Notification'];
function LoginController($scope, $http, $state, Notification) {
  var vm = this;

  vm.login = login;
  vm.user = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'phone': '',
    'password': ''
  }

  function login(isValid) {
    if(!isValid) Notification.error({ message: 'All fields must be submitted!' });
    else {
      Notification.success({ message: 'You are logged in!' });
      $state.go('app.main');
    }
  }
}