// controller.js
angular
.module('app')
.controller('LoginController', LoginController)

LoginController.$inject = ['$scope', '$http', '$state', 'Notification'];
function LoginController($scope, $http, $state, Notification) {
  var vm = this;

  vm.login = login;
  vm.test = test;
  vm.user = {
    'first_name': 'John',
    'last_name': 'Smiley',
    'email': 'smile@gmail.com',
    'phone_number': 9187287182,
    'password': 'john'
  }

  function test() {
    var url = 'http://165.227.206.185:8000' + '/account'
    var config = {};
    $http({
      url: url,
      method: "POST",
      data: vm.user,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
  .then(function(response) {
          // success
          console.log(response);
  }, 
  function(response) { // optional
          // failed
          console.log(response);
  });
  }

  function login(isValid) {
    if(!isValid) Notification.error({ message: 'All fields must be submitted!' });
    else {
      Notification.success({ message: 'You are logged in!' });
      $state.go('app.main');
    }
  }
}