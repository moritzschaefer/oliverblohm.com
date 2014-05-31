'use strict';

angular.module('newOliverApp')
  .controller('MainCtrl', function ($scope) {
      $scope.mainSlides = [
          "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
      $scope.afterSlideshow = function($slider) {
          $('.current_pos').text($slider.currentSlide+1);
      }
      $scope.startSlideshow = function($slider) {
        $('.total').text($slider.count);
      }
      $scope.nextSlideshow = function() {
          $(".flexslider").flexslider('next');
      }
      $scope.prevSlideshow = function() {
          $(".flexslider").flexslider('prev');
      }
  });
