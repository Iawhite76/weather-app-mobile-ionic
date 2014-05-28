'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function() {

  return {
    all: function() {
      return JSON.parse(window.localStorage.getItem('cities'));
    },
    get: function(city) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      return city.cityId;
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
