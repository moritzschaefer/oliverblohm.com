'use strict';

angular.module('newOliverApp')
  .controller('BasketCtrl', function ($scope, $cookies, requests) {
      $scope.$watch(function() { return $cookies.requests; }, function(val) {
          $scope.basket = requests.allRequests();
      });
  });
