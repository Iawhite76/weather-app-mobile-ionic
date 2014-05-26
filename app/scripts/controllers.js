'use strict';
angular.module('IonicWeatherApp.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.add = function(cityName, stateName) {
    console.log(cityName + ', ' + stateName);
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
