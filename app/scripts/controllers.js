'use strict';
angular.module('IonicWeatherApp.controllers', ['ionic'])

.controller('DashCtrl', ['$scope', '$ionicLoading', '$ionicModal', 'Cities', function($scope, $ionicLoading, $ionicModal, Cities) {

  // toggle between showing and hiding sections
  $scope.toggle = function () {
    $scope.CommentFunctionality = !$scope.CommentFunctionality;
    $scope.CityForm = !$scope.CityForm;
  };

  $scope.CommentFunctionality = false;
  $scope.CityForm = true;

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createComment = function(comment) {
    $scope.modal.hide();

    $scope.toggle();

    // city and state variables are attached to $scope below in
    // $scope.add. This is a bit confusing...refactor
    Cities.save(this.city, this.state, comment.body);
    comment.body = '';
  };

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // Execute action on hide modal
  $scope.$on('modal.hide', function() {
    // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.displayCityInfo = function(cityName, stateName) {
    console.log(cityName + ', ' + stateName);
    // the two following scopes are sent to templates/tab-dash
    // and are used in the comments modal
    $scope.city = cityName.toLowerCase();
    $scope.state = stateName.toLowerCase();
    // dim the screen and display 'Loading' while gathering info from API
    $ionicLoading.show({
      content: 'Loading...',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    // ajax call to open weather API
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ', ' + stateName + '&mode=json&units=imperial',
        type: 'get',
        dataType: 'json',
        success: function (data) {
          if (data.cod === 200) {
            $scope.error = false;
            // remove loading screen and return screen to normal brightness
            $ionicLoading.hide();
            // show city info and comment button. Hide city form
            $scope.toggle();
            console.log(data.main.temp);
            $scope.$apply(function() { //necessary to $apply the changes http://outbottle.com/angularjs-a-crash-course-in-processing-ajax-json/
              // all these variables are attached to $scope and used in templates/tab-dash
              $scope.cityInfo = 'Weather Info For ' + cityName + ', ' + stateName + ':';
              $scope.temp = 'Temp: ' + data.main.temp + ' °F';
              $scope.highTemp = 'Hi: ' + data.main.temp_max + ' °F';
              $scope.lowTemp = 'Lo: ' + data.main.temp_min + ' °F';
              $scope.pressure = 'Pressure: ' + data.main.pressure + ' hPa';
              $scope.humidity = 'Humidity: ' + data.main.humidity + ' %';
            });
          } else {
            $ionicLoading.hide();
            $scope.error = true;
            $scope.displayError = "Please enter valid information and try again";
          }
        },
        error: function(xhr, status) {
          console.log('Error: ' + status);
        }
      });
  };

  $scope.clear = function() {
    $('input').val('');
  };
}])

.controller('CityCtrl',['$scope', 'Cities', function($scope, Cities) {
  // this is sent to tab-cities.html for use in angular directives
  $scope.cities = Cities.all();
}])

.controller('CityDetailCtrl',['$scope', '$stateParams', 'Cities', function($scope, $stateParams, Cities) {
  // this is sent to tab-cities.html for use in angular directives
  $scope.city = Cities.get($stateParams);
  $scope.comments = Cities.getComments($stateParams);
}]);

