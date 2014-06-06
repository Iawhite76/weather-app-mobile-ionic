'use strict';

describe('Controller: DashCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('IonicWeatherApp.controllers', 'IonicWeatherApp.services'));

  var DashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashCtrl = $controller('DashCtrl', {
      $scope: scope
    });
  }));

  it('should verify cities length', function () {
    scope.createComment.should.have.length(4);
  });

});
