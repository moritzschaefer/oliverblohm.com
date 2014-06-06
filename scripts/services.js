'use strict';

angular.module('newOliverApp')
.factory('requests', ['$cookies', function(cookies) {
        var cookieToArray = function() {
            if(typeof cookies.requests === "undefined")
                return [];
            return JSON.parse(cookies.requests);
        }
        var arrayToCookie = function(arr) {
            cookies.requests = JSON.stringify(arr);
        }
        return {
            addRequest: function(id, requestOption) {
                var arr = cookieToArray();
                arr.push({id: id, requestOption: requestOption});
                arrayToCookie(arr);
            },
            isRequested: function(id, requestOption) {
                var arr = cookieToArray();
                var found = arr.filter(function(obj) {
                    return obj.id === id && obj.requestOption === requestOption;
                });
                return found !== undefined;
            },
            allRequests: function() {
                return cookieToArray();

            },
            requestOptions: [
                {
                    title: 'uiae',
                    price: '500 eure',
                    description: 'habeda habeda'
                }
            ],
            selection: [
                //add description

                {
                    title: 'Lorem ipsum',
                    description: 'this is a beautiful image description. Thank you.',
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
    ]


        };
}])
