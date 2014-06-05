'use strict';

angular.module('newOliverApp')
.controller('AcquireCtrl', function ($scope) {
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
    //$('.publications .gallery').hide();
    /*$('.publications li> a:first-child').click(function(e){
        $('.publications li').removeClass('active');
        $(this).parent().toggleClass('active');
        if($(this).parent().find('.gallery').is(":visible") == true) {
            $('.publications .gallery').slideUp();
        } else {
            $('.publications .gallery').slideUp();
            $(this).parent().find('.gallery').slideToggle();
        }
        e.preventDefault();
    });*/
});
