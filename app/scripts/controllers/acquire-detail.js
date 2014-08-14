'use strict';

angular.module('newOliverApp')
.controller('AcquireDetailCtrl', function ($scope, $cookies, $routeParams, requests, $timeout) {
    $scope.showOverlay = false;
    $scope.id = parseInt($routeParams.requestId);
    $scope.requestOptions = requests.requestOptions;
    var selected = requests.selection[$scope.id];
    $scope.image = selected.image;
    $scope.title = selected.title;
    $scope.price = selected.price;
    $scope.description = selected.description;

    $scope.addRequest = function(image, requestOption) {
        requests.addRequest(image, requestOption);
        $scope.showOverlay = true;
        $scope.chosen = requests.requestOptions[requestOption].title;
        $timeout(function() {
            $scope.showOverlay = false;
        }, 1800);
    }
});
