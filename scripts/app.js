'use strict';

angular
  .module('newOliverApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angular-flexslider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'PublicationsCtrl'
      })
      .when('/acquire', {
        templateUrl: 'views/acquire.html',
        controller: 'PublicationsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'PublicationsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
