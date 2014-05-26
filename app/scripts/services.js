'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function() {
  var cities = [
    { id: 0, name: 'austin', state: 'tx'},
    { id: 1, name: 'chicago', state: 'il'},
    { id: 2, name: 'san antonio', state: 'tx'},
    { id: 3, name: 'dallas', state: 'tx'},
    { id: 4, name: 'pheonix', state: 'az'},
    { id: 5, name: 'boulder', state: 'co'},
    { id: 6, name: 'irvine', state: 'ca'},
    { id: 7, name: 'new York', state: 'ny'},
    { id: 8, name: 'san diego', state: 'ca'},
    { id: 9, name: 'deluth', state: 'mn'},
    { id: 10, name: 'new orleans', state: 'la'},
    { id: 11, name: 'houston', state: 'tx'}
  ];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      return cities[cityId];
    }
  };
});
