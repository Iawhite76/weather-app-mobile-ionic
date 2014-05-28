'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function() {
  // var cities = {};
  // var cities = [
  //   { id: 0, name: 'austin', state: 'tx', comments: ["Hi", "there"]},
  //   { id: 1, name: 'chicago', state: 'il', comments: []},
  //   { id: 2, name: 'san antonio', state: 'tx', comments: []},
  //   { id: 3, name: 'dallas', state: 'tx', comments: []},
  //   { id: 4, name: 'pheonix', state: 'az', comments: []},
  //   { id: 5, name: 'boulder', state: 'co', comments: []},
  //   { id: 6, name: 'irvine', state: 'ca', comments: []},
  //   { id: 7, name: 'new York', state: 'ny', comments: []},
  //   { id: 8, name: 'san diego', state: 'ca', comments: []},
  //   { id: 9, name: 'deluth', state: 'mn', comments: []},
  //   { id: 10, name: 'new orleans', state: 'la', comments: []},
  //   { id: 11, name: 'houston', state: 'tx', comments: []}
  // ];

  return {
    all: function() {
      return JSON.parse(window.localStorage.getItem('cities'));
      // return localStorage = null;
    },
    get: function(city) {
      // return cities[cityId];
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      return city.cityId;
      // console.log(JSON.stringify(cities[city.cityId]));
      // return JSON.stringify(cities[city.cityId]);
    },
    save: function(cityInfo, stateInfo, comment) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      if (cities[cityInfo + ', ' + stateInfo] != undefined) {
        cities[cityInfo + ', ' + stateInfo].push(comment);
        window.localStorage.setItem('cities', JSON.stringify(cities));
      } else {
        cities[cityInfo + ', ' + stateInfo] = [comment];
        window.localStorage.setItem('cities', JSON.stringify(cities));
      }
    },
    getComments: function(city) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      return cities[city.cityId];
    }
  };
});
