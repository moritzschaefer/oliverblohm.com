'use strict';

angular
.module('newOliverApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngRoute',
  'angular-flexslider'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'views/acquire.html',
      controller: 'AcquireCtrl'
  })
  .when('/acquire', {
      templateUrl: 'views/acquire.html',
      controller: 'AcquireCtrl'
  })
  .when('/acquire-detail/:requestId', {
      templateUrl: 'views/acquire-detail.html',
      controller: 'AcquireDetailCtrl'
  })
  .when('/requests', {
      templateUrl: 'views/requests.html',
      controller: 'RequestsCtrl'
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
.directive('shopImage', ['$cookies', function(cookies) {
    return {
      rescrict: 'A',
      templateUrl: 'views/shop-image.html',
      transclude: true,
      scope: {
        shopImage: '=',
        id: '=index',
      },
      link: function(scope, element, attrs) {

      }
    }

}]);
