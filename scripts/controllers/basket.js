'use strict';

angular.module('newOliverApp')
  .controller('BasketCtrl', function ($scope, $cookies, $log) {
      $scope.$watch(function() { return $cookies.basket; }, function(newBasket) {
          try {
            $scope.basket = JSON.parse(newBasket);
          } catch (e) {
              $scope.basket = [];
              $log.log("Basket could not be parsed. Value was: " + newBasket);
          }
      });
  });
