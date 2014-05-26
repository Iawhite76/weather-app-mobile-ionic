'use strict';
angular.module('IonicWeatherApp.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.add = function(cityName, stateName) {
    console.log(cityName + ', ' + stateName);
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + ", " + stateName + "&mode=json&units=imperial",
        type: "get",
        dataType: "json",
        success: function (data) {
          console.log(data.main.temp);
        },
        error: function(xhr, status) {
          console.log("Error: " + status);
        }
      });
  };
})

.controller('CityCtrl', function($scope, Cities) {
  $scope.cities = Cities.all();
});

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

// .controller('AccountCtrl', function($scope) {
// });
