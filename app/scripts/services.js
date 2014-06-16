'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function() {



  return {
    all: function() {
      return JSON.parse(window.localStorage.getItem('cities'));
    },
    get: function(city) {
      return city.cityId;
    },
    save: function(cityInfo, stateInfo, comment) {
      var fullCityInfo = cityInfo + ', ' + stateInfo;

      // if(!window.localStorage.length) { var cities = window.localStorage.setItem('cities', JSON.stringify({}))};
      var cities = JSON.parse(window.localStorage.getItem('cities')) || {};
      function City(name, words) {
        this.name = name;
        this.comments = [words];
      }
      var city = new City(fullCityInfo, comment);

      cities.hasOwnProperty(city.name) ? cities[city.name].push(city.comments) : cities[city.name] = city.comments;
      window.localStorage.setItem('cities', JSON.stringify(cities));
      console.log(JSON.parse(window.localStorage.getItem('cities')));
    },
    getComments: function(city) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      console.log(cities[city.cityId]);
      return cities[city.cityId];
    }
  };
});
