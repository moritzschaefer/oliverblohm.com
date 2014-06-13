
'use strict';

angular.module('newOliverApp')
.controller('PublicationsCtrl', function ($scope) {
    $scope.galleries = [
        {
            title: 'PERSEPHONE for ODALISQUE MAGAZINE',
            link: 'http://oliverblohm.blogspot.de/2014/04/odalisque-magazine-persephone.html',
            elements: [
                'images/persephone/persephone_odalisquemagazine_oliverblohm_01.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_02.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_03.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_04.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_05.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_06.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_07.jpg'
            ]
        }, {
            title: 'NACHKRIEGSZEIT/ POSTWAR for KALTBLUT MAGAZINE ',
            link: 'http://oliverblohm.blogspot.de/2014/03/kaltblut-magazine-nachkriegszeit-postwar.html',
            elements: [
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_01.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_02.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_03.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_04.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_05.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_06.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_07.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_08.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_09.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_10.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_11.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_12.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_13.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_14.jpg',
                'images/nkz/nachkriegszeit_postwar_oliverblohm_kaltblutmagazine_naladiagouraga_15.jpg'
            ]
        }, {
            title: 'A TEMPO for ZINK MAGAZINE',
            link: 'http://oliverblohm.blogspot.de/2013/10/a-tempo-for-zink-magazine.html',
            elements: [
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_01.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_02.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_03.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_04.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_05.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_06.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_07.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_08.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_09.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_10.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_11.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_12.jpg'
            ]
        }
    ];
    $scope.lulu = [                'images/persephone/persephone_odalisquemagazine_oliverblohm_01.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_02.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_03.jpg',
                'images/persephone/persephone_odalisquemagazine_oliverblohm_07.jpg'

];
    $scope.lala = [
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_01.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_11.jpg',
                'images/a_tempo/perlensaue_oliverblohm_zink_carobruchmann_12.jpg'
            ];
    $('.publications .gallery').hide();
    $('.publications li> a:first-child').click(function(e){
        $('.publications li').removeClass('active');
        $(this).parent().toggleClass('active');
        if($(this).parent().find('.gallery').is(":visible") == true) {
            $('.publications .gallery').slideUp();
        } else {
            $('.publications .gallery').slideUp();
            $(this).parent().find('.gallery').slideToggle();
        }
        e.preventDefault();
    });

  $('.flexslider').flexslider({
    //animation: "slide",
    slideshow: false,
    controlNav: true,
    directionNav: true,
    prevText: '<',
    nextText: '>',
    controlsContainer: 'flexslider',
    after: function(slider) {
      slider.find('.current_pos').text(slider.currentSlide+1);
    },
    start: function(slider) {
      slider.find('.total').text("/ " + slider.count);
    }
  });

  $('.slides').click(function(){
    $(this).parent().flexslider("next");
  });
  $('.prev').click(function(e){
    $(this).parent().parent().flexslider('prev');
    e.preventDefault();
  });
  $('.next').click(function(e){
    $(this).parent().parent().flexslider('next');
    e.preventDefault();
  });
});
