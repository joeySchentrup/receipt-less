// controller.js
angular
.module('app')
.controller('LoginController', LoginController)

LoginController.$inject = ['$scope', '$http', '$state', 'Notification', 'TransferService'];
function LoginController($scope, $http, $state, Notification, TransferService) {
  var vm = this;

  vm.login = login;
  vm.register = register;
  vm.user = {
    'first_name': '',
    'last_name': '',
    'email': '',
    'phone_number': '',
    'password': '',
    '_id': '24'
  }

  function login(isValid) {
    if(!isValid) Notification.error({ message: 'All fields must be submitted!' });
    else {
      var url = 'http://165.227.206.185:8000/account/' + vm.user.email;

      $http.get(url)
        .then(function(response) {
          if(response.data !== null) {
            TransferService.setUser(response.data);

            Notification.success({ message: 'You are logged in!' });
            $state.go('app.main');
          }
          else Notification.error({ message: 'No account exists. Register an account.' });
        })
        .catch(function(err) {
          console.log(err);
          Notification.error({message: 'Error, not logged in!'});
        });
    }
  }

  function register(isValid) {
    if(!isValid) Notification.error({ message: 'All fields must be submitted!' });
    else {
      var url = 'http://165.227.206.185:8000/account';
      vm.user.phone_number = parseInt(vm.user.phone_number);

      $http.post(url, vm.user, {})
        .then(function(response) {
          if(response.data !== null) {
            TransferService.setUser(response.data);

            Notification.success({ message: 'You are registered and logged in!' });
            $state.go('app.main');
          }
          else Notification.error({ message: 'Error, not logged in!' });
        })
        .catch(function(err) {
          console.log(err);
          Notification.error({message: 'Error, not logged in!'});
        });
    }
  }
}