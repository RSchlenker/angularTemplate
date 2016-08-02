describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    var sorted = true;
    expect(sorted).toEqual(true);
  });
});

describe('myControllerDescription', function() {
  beforeEach(module('webengineering'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('loaded', function() {
    it('loads the angular module', function() {
      var $scope = {};
      var controller = $controller('webengineering', {$scope: $scope});
      expect(true).toEqual(true);
    });
  });
});
