'use strict';

angular.module('newOliverApp')
.controller('RequestsCtrl', ["$scope", "requests", "$http", "$location", "$timeout", function ($scope, requests, $http, $location, $timeout) {
        $scope.showValidation = false;
        $scope.showOverlay = false;
        $scope.$watch(function() {return requests.requests;}, function(newVal) {
            updateRequests();
        });
        var updateRequests = function() {
            $scope.requests = requests.requests.map(function (element, index) {
                return {
                    title: requests.selection[element.id].title,
                    description: requests.requestOptions[element.requestOption].description,
                    image: requests.selection[element.id].image,
                    price: requests.requestOptions[element.requestOption].price
                };
            });
        }
        $scope.deleteItem = function(id) {
            requests.deleteRequest(id);
            updateRequests();
        }
        $scope.sendRequest = function() {
            // validate form first
            $scope.showValidation = true;
            if(!$scope.requestForm.$valid) {
              return;
            }

            // prepare data
            var requestsTexts = requests.requests.map(function (element, index) {
                return requests.selection[element.id].title + "\n" +
                    requests.requestOptions[element.requestOption].description + "\n" +
                    requests.requestOptions[element.requestOption].price + "\n";
            });

            var data = {email: $scope.email, name: $scope.name, message: $scope.message, requests: requestsTexts.join("\n")};
            // send email
            $http({method: 'POST', url: '/backend/mailer.php', data: data}).success(function() {
                $scope.showSuccess = true;
                $timeout(function() {
                    $scope.showSuccess = false;
                    requests.deleteAll();
                    $location.path("/acquire");
                }, 5000);
            }).error(function() {
                $scope.showError = true;
                $timeout(function() {
                    $scope.showError = false;
                }, 5000);
            });
            return true;
        }
}]);
