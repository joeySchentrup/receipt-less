angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

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
      templateUrl: 'views/common/layouts/full.html',
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
        label: 'Home',
      }
    })
    .state('app.add-receipts', { // Add receipts
      url: '/add-receipts',
      templateUrl: 'views/common/add-receipts.html',
      controller: 'AddReceiptsController',
      ncyBreadcrumb: {
        label: 'Add Receipt',
      }
    })
    .state('app.expenses', { // Expenses
      url: '/expenses',
      templateUrl: 'views/common/expenses.html',
      controller: 'ExpensesController',
      ncyBreadcrumb: {
        label: 'Expenses',
      }
    })
    .state('profile', { // User profile
      url: '/profile',
      templateUrl: 'views/profile.html',
      controller: 'ProfileController'
    })
    .state('login', { // Login/register
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
}]);
