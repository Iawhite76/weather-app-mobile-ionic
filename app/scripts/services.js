'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function(localStorageService) {
  var cities = {
    "0": {name: 'austin, tx', comments: ['comment']}
  };

  localStorageService.set('cities', JSON.stringify(cities));
  var value = localStorageService.get('cities');
  // console.log(value);
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
      // console.log(cities);
      return cities;
    },
    get: function(city) {
      console.log(cities[city['cityId']]);
      return cities[city['cityId']];
    }
  }
  // return {
  //   all: function() {
  //     return cities;
  //   },
  //   get: function(cityId) {
  //     return cities[cityId];
  //   },
  //   find: function(cityInfo, stateInfo, comment) {
  //     for (var i = 0, l = cities.length -1; i < l; i++) {
  //       if (cities[i]['name'] !== cityInfo) {
  //         return cities.push({id: 12, name: cityInfo, state: stateInfo, comments: [comment]})
  //       } else {
  //         return cities[i]['comments'].push(comment);
  //       }
  //     }
  //   }
  // };
});
