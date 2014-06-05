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

      // set cities variable to array of cities if they exist,
      // or save the first city comment submitted
      var cities = JSON.parse(window.localStorage.getItem('cities')) || window.localStorage.setItem('cities', JSON.stringify([{name: fullCityInfo, comments: [comment]}]));

      var search = function (myArray, searchTerm, property) {
        for(var i = 0, len = myArray.length; i < len; i++) {
          if (myArray[i][property] === searchTerm) {
            return i;
          }
        }
        return -1;
      };

      var result = search(cities, fullCityInfo, 'name');
      if(cities.length && result !== -1) {
        cities[result].comments.push(comment);
        console.log(cities[result]);
      } else {
        cities.push({name: fullCityInfo, comments: [comment]});
        console.log(cities);
      }
      window.localStorage.setItem('cities', JSON.stringify(cities));
      console.log(cities);
    },
    getComments: function(city) {
      var cities = JSON.parse(window.localStorage.getItem('cities'));
      for (var i=0, l = cities.length; i < l; i++) {
        if (cities[i].name === city.cityId) {
          return cities[i].comments;
        }
      }
    }
  };
});
