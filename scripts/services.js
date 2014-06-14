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
                this.requests.push({id: id, requestOption: requestOption});
                arrayToCookie(this.requests);
            },
            deleteRequest: function(index) {
                this.requests.splice(index, 1);
                arrayToCookie(this.requests);
            },
            deleteAll: function() {
                this.requests = [];
                arrayToCookie(this.requests);
            },
            isRequested: function(id, requestOption) {
                var found = this.requests.filter(function(obj) {
                    return obj.id === id && obj.requestOption === requestOption;
                });
                return found !== undefined;
            },
            requests : cookieToArray(),
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
