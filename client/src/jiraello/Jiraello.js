var myModule = angular.module('Jiraello',
[
  'ngRoute',
  'ngAnimate',
  'firebase',
  'ngMessages',
  'Jiraello.Common',
  'Jiraello.Dashboard',
  'Jiraello.Login',
  'Jiraello.Storyboard',
  'Jiraello.User',
  'auth0',
  'angular-jwt',
  'angular-storage'
]);

myModule.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'src/jiraello/storyboard/tmpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard',
        })
        .when('/dashboard', {
            templateUrl: 'src/jiraello/dashboard/tmpl/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard',
        })
        .when('/users', {
            templateUrl: 'src/jiraello/user/tmpl/users.html',
            controller: 'UsersCtrl',
            controllerAs: 'users',
        })
        .when('/users/:userId', {
            templateUrl: 'src/jiraello/user/tmpl/user.html',
            controller: 'UserCtrl',
            controllerAs: 'myUser',
            requiresLogin: true,
        })
        .when('/login', {
            templateUrl: 'src/jiraello/login/tmpl/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .otherwise({redirectTo: '/'});
