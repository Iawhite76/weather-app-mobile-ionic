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
          $scope.$apply(function() { //necessary to $apply the changes
            $scope.cityInfo = "Weather Info For " + cityName + ', ' + stateName + ":"
            $scope.temp = '' || "Temp: " + data.main.temp + " °F";
            $scope.highTemp = '' || "Hi: " + data.main.temp_max + " °F";
            $scope.lowTemp = '' || "Lo: " + data.main.temp_min + " °F";
            $scope.pressure = '' || "Pressure: " + data.main.pressure + " hPa";
            $scope.humidity = '' || "Humidity: " + data.main.humidity + " %";
          })
        },
        error: function(xhr, status) {
          console.log("Error: " + status);
        }
      });
  };

  $scope.clear = function() {
    $('input').val('');
  }
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
