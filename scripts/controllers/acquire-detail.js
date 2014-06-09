'use strict';

angular.module('newOliverApp')
.controller('AcquireDetailCtrl', function ($scope, $cookies, $routeParams, requests) {
    $scope.id = parseInt($routeParams.requestId);
    $scope.requestOptions = requests.requestOptions;
    var selected = requests.selection[$scope.id];
    $scope.image = selected.image;
    $scope.title = selected.title;
    $scope.price = selected.price;
    $scope.description = selected.description;

    $scope.addRequest = function(image, requestOption) {
        requests.addRequest(image, requestOption);
    }
});
