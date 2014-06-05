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
        controller: 'AcquireCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('gallery', function() {
      return {
          restrict: 'A',
          templateUrl: 'views/gallery.html',
          scope: {
              gallery: '='
          },
          link: function(scope, element, attrs) {
              // first generate html, the

              // set content here
              scope.link = scope.gallery.link;
              scope.title = scope.gallery.title;
              scope.elements = angular.copy(scope.gallery.elements);
              scope.num = scope.gallery.elements.length;

          }
      };
  })
  .directive('shopImage', function() {
      return {
          rescrict: 'A',
          templateUrl: 'views/shop-image.html',
          scope: {
              shopImage: '='
          },
          link: function(scope, element, attrs) {


          }
      }

  })
