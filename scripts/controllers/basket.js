'use strict';

angular.module('newOliverApp')
  .controller('BasketCtrl', function ($scope, $cookies, requests) {
      $scope.$watch(function() { return requests.requests; }, function(val) {
          $scope.basket = requests.requests;
      });
  });
