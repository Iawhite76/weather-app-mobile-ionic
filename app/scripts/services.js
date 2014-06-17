'use strict';
angular.module('IonicWeatherApp.services', [])

  // A simple service that returns some data
.factory('Cities', function() {



  return {
    all: function() {
      // convert cities object to an associative array and ng-repeat filters
      // only work on arrays
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      var citiesArray = [];
      for (var key in cities) {
        citiesArray.push({name: key, comments: cities[key]});
      }
      return citiesArray;
    },
    get: function(city) {
      return city.cityId;
    },
    save: function(cityInfo, stateInfo, comment) {
      // concatenate city and state info e.g., 'austin', 'tx' #=> 'austin, tx'
      var fullCityInfo = cityInfo + ', ' + stateInfo;

      // initialize variable 'cities' to localStorage.cities object or empty object
      // if localStorage.cities is null
      var cities = JSON.parse(window.localStorage.getItem('cities')) || {};

      // factory to build a new city from provided info
      function City(name) {
        this.name = name;
        this.comments = [];
      }

      // build new City object
      var city = new City(fullCityInfo);

      // query cities object for city entered. If found: add comment to existing
      // comments array; if not, create city with initial comment
      cities.hasOwnProperty(city.name) ? cities[city.name].push(comment) : cities[city.name] = [comment];

      // save updated cities object to locaStorage in browser/mobile device
      window.localStorage.setItem('cities', JSON.stringify(cities));
    },
    getComments: function(city) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      // 'city' is object returned from $stateParams in cityDetailCtly
      // in controllers.js.  Access city name string with .cityId
      return cities[city.cityId];
    }
  };
});
