'use strict';

angular.module('newOliverApp')
.controller('AcquireCtrl', function ($scope, $cookies, $log) {
    $scope.selection = [
        {
            title: 'Lorem ipsum',
            price: '200,00€ - 400€',
            image: 'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
        },
        {
            title: 'Lorem ipsum',
            price: '',
            image: 'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
        },
        {
            title: 'Lorem ipsum',
            price: '',
            image: 'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
        },
        {
            title: 'Lorem ipsum',
            price: '',
            image: 'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
        },
        {
            title: 'Lorem ipsum',
            price: '',
            image: 'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
        },
    ];
    $scope.addToBasket = function() {
        $cookies.basket =  "['uiae']";
        $log.log("uiae");
    }
});
