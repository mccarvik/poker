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
  $scope.image = {
        'holecard1' : '',
        'holecard2' : '',
        'board1' : '',
        'board2' : '',
        'board3' : '',
        'board4' : '',
  };
  $scope.cards = {
    'holecard1' : {
      'val' : undefined,
      'suit' : undefined
    },
    'holecard2' : {
      'val' : undefined,
      'suit' : undefined
    },
    'board1' : {
      'val' : undefined,
      'suit' : undefined
    },
    'board2' : {
      'val' : undefined,
      'suit' : undefined
    },
    'board3' : {
      'val' : undefined,
      'suit' : undefined
    },
    'board4' : {
      'val' : undefined,
      'suit' : undefined
    }
  };
  
  $scope.saved_cards = {};
  
  $scope.results = [];
  
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
    
    var insC;
    if (event.target.title === 'Suit') {
      insC = insertCard('Suit', this.Card, cardpair);
      $scope.cards[cardpair]['suit'] = this.Card;
    } else {
      insC = insertCard('Value', this.Card, cardpair);
      $scope.cards[cardpair]['val'] = this.Card;
    }
    if (insC !== undefined) {
      $scope.image[cardpair] = 'app/static/imgs/' + insC + ".png";
    }
  };
  
  $scope.run_sim = function($event) {
    run_simulation($event, $scope.cards, $scope.handleData);
  };
  
  $scope.handleData = function(data) {
    // need this to force the update of the digest cycle
    console.log(data);
    $scope.$apply(function(){
      $scope.results = data.slice(1);
    });
    
  };
  
});

app.controller('MultiHandCtrl', function($scope, $compile) {
  console.log('inside multi hand controller');

});