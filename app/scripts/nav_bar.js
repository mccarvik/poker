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
        'A',
        'K',
        'Q',
        'J',
        '10',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2'
    ];
  $scope.suits = [
        '\u2660',
        '\u2665',
        '\u2666',
        '\u2663'
    ];
  
  $scope.image = 'app/static/imgs/2c.png';
  
  $scope.cardSelect = function($event) {
    var cardpair = '';
    for (var i=0; i<event.target.classList.length; i++) {
      if (event.target.classList[i].slice(0,5) === 'board') {
        cardpair = event.target.classList[i]
        break;
      } else if (event.target.classList[i].slice(0,8) === 'holecard') {
        cardpair = event.target.classList[i]
        break;
      }
    }
    
    if (event.target.title === 'Suit') {
      $scope.image = 'app/static/imgs/' + insertCard('Suit', this.Card, cardpair) + ".png";
    } else {
      $scope.image = 'app/static/imgs/' + insertCard('Value', this.Card, cardpair) + ".png";
    }
  };
  
});

app.controller('MultiHandCtrl', function($scope, $compile) {
  console.log('inside multi hand controller');

});

app.controller('PlayLiveCtrl', function($scope, $compile) {
  console.log('inside play live controller');

});