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
          title: 'Plakat A1',
          price: '30 EURO', // in grau unter preis
          shipment: 'zzgl. 9 EURO Versand<br>(Mehrere bilder + Deutschlandweit)<br>lieferzeit: 7-9 tage<br>oder selbstabholung',
          description: 'Größe: 59,4 x 84 cm<br> limitierte auflage: 100<br> 140 g/m² matt'
        }
            ],
            selection: [
              //add description

              {
                title: 'vintage images - 08',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o0.jpg',
              },
              {
                title: 'face of futurus 1 - 01',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o1.jpg',
              },
              {
                title: 'face of futurus 2',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o2.jpg',
              },
              {
                title: 'a tempo - 09',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o3.jpg',
              },
              {
                title: 'perlensäue backstage - 01',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o4.jpg',
              },
              {
                title: 'vormittagsspuk - 05',
                description: 'vormittagsspuk - haunting in the morning<br>ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o5.jpg',
              },
              {
                title: 'm&h - 06',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o6.jpg',
              },
              {
                title: 'lust - 02',
                description: 'lust - manhattan<br>ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o7.jpg',
              },
              {
                title: 'a tempo - 10',
                description: 'ausgangsmaterial: analoger polaroid-film',
                price: '30 Euro',
                image: 'images/selection/o8.jpg',
              },
    ]


    };
}]);

