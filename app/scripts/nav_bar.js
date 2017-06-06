var app = angular.module("poker", [])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/single_hand',
    {
      templateUrl:    'single_hand.html',
      controller:     'SingleHandCtrl'
    });
    $routeProvider.when('/multi_hand',
    {
      templateUrl:    'multi_hand.html',
      controller:     'MultiHandCtrl'
    });
    $routeProvider.when('/play_live',
    {
      templateUrl:    'play_live.html',
      controller:     'PlayLiveCtrl'
    });
    $routeProvider.otherwise(
    {
      redirectTo:     '/home.html',
      controller:     'NavCtrl', 
    }
  );
});

app.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {  
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };
}]);

app.controller('SingleHandCtrl', function($scope, $compile) {
  console.log('inside single hand controller');
  $scope.vals = [
        { v : 'A' },
        { v : 'K' },
        { v : 'Q' },
        { v : 'J' },
        { v : '10' },
        { v : '9' },
        { v : '8' },
        { v : '7' },
        { v : '6' },
        { v : '5' },
        { v : '4' },
        { v : '3' },
        { v : '2' },
    ];
    $scope.suits = [
        'S',
        'H',
        'D',
        'C'
    ];
});

app.controller('MultiHandCtrl', function($scope, $compile) {
  console.log('inside multi hand controller');

});

app.controller('PlayLiveCtrl', function($scope, $compile) {
  console.log('inside play live controller');

});