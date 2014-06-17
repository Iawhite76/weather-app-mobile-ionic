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
    save: function(city, state, comment) {
      // concatenate city and state info e.g., 'austin', 'tx' #=> 'austin, tx'
      var cityAndState = city + ', ' + state;

      // initialize variable 'cities' to localStorage.cities object or empty object
      // if localStorage.cities is null
      var cities = JSON.parse(window.localStorage.getItem('cities')) || {};

      // query cities object for city entered. If found: add comment to existing
      // comments array; if not, create city with initial comment
      cities.hasOwnProperty(cityAndState) ? cities[cityAndState].push(comment) : cities[cityAndState] = [comment];

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
