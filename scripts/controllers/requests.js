'use strict';

angular.module('newOliverApp')
.controller('RequestsCtrl', ["$scope", "requests", "$http", function ($scope, requests, $http) {
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
            // prepare data
            var requestsTexts = requests.requests.map(function (element, index) {
                return
                requests.selection[element.id].title + "\n" +
                    requests.requestOptions[element.requestOption].description + "\n" +
                    requests.requestOptions[element.requestOption].price + "\n";
            });

            var data = {email: $scope.email, name: $scope.name, message: $scope.message, requests: requestsTexts.join("\n")};
            $scope.showOverlay = true;
            // send email
            $http({method: 'POST', url: '/backend/mailer.php', data: data});
            // delete all requests
        }
}]);
