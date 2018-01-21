angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', 
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
    .state('app', { // Full layout
      abstract: true,
      templateUrl: 'views/layouts/full.html',
      ncyBreadcrumb: {
        label: 'Root',
        skip: true
      }
    })
    .state('app.main', { // Main dashboard
      url: '/dashboard',
      templateUrl: 'views/main.html',
      controller: 'DashboardController',
      ncyBreadcrumb: {
        label: 'Dashboard',
      }
    })
    .state('app.add-receipts', { // Add receipts
      url: '/add-receipts',
      templateUrl: 'views/dashboard/add-receipts.html',
      controller: 'AddReceiptsController',
      ncyBreadcrumb: {
        label: 'Add Receipt',
      }
    })
    .state('app.expenses', { // Expenses
      url: '/expenses',
      templateUrl: 'views/dashboard/expenses.html',
      controller: 'ExpensesController',
      ncyBreadcrumb: {
        label: 'Expenses',
      }
    })
    .state('app.profile', { // User profile
      url: '/profile',
      templateUrl: 'views/user/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm',
      ncyBreadcrumb: {
        label: 'Profile',
      }
    })
    .state('login', { // Login/register
      url: '/login',
      templateUrl: 'views/user/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })
}]);
