'use strict';

angular.module('newOliverApp')
.controller('AcquireCtrl', function ($scope, $cookies, requests) {
    $scope.selection = requests.selection;
});
