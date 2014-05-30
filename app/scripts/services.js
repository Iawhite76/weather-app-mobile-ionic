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
      var fullInfo = cityInfo + ', ' + stateInfo;
      var cities = JSON.parse(window.localStorage.getItem('cities')) || [];
      // if (cities[cityInfo + ', ' + stateInfo] != undefined) {
      //   cities[cityInfo + ', ' + stateInfo].push(comment);
      //   window.localStorage.setItem('cities', JSON.stringify(cities));
      // } else {
      //   cities[cityInfo + ', ' + stateInfo] = [comment];
      //   window.localStorage.setItem('cities', JSON.stringify(cities));
      // }
      if(!cities.length) {
            cities.push({name: fullInfo, comments: [comment]});
            window.localStorage.setItem('cities', JSON.stringify(cities));
          } else{
        for (var i=0, l = cities.length; i < l; i++) {
          if (cities[i].name === fullInfo) {
            cities[i].comments.push(comment);
            window.localStorage.setItem('cities', JSON.stringify(cities));
            // return cities[i].comments;
          }
        }
      }
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
