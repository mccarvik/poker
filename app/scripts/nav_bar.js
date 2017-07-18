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
  
  $scope.saved_cards = [];
  
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
  
  $scope.saved_cards = [];
  
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
    console.log(cardpair);
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
    // if ($scope.cards['holecard1']['val'] !== undefined && $scope.cards['holecard1']['suit'] !== undefined && $scope.cards['holecard2']['val'] !== undefined && $scope.cards['holecard2']['suit'] !== undefined) {
    //   var cardpair1 = $scope.cards['holecard1']['val'] + $scope.cards['holecard1']['suit']
    //   var cardpair2 = $scope.cards['holecard2']['val'] + $scope.cards['holecard2']['suit']
    //   var saved_hands = cardpair1 + ' ' + cardpair2;
    //   $scope.saved_cards.push(saved_hands);
    // }
    for (var i=0; i<$scope.saved_cards.length; i++) {
      $scope.cards['saved' + i +"_1"] = {};
      $scope.cards['saved' + i +"_2"] = {};
      $scope.cards['saved' + i +"_1"]['val'] = $scope.saved_cards[i][0];
      $scope.cards['saved' + i +"_1"]['suit'] = $scope.saved_cards[i][1];
      $scope.cards['saved' + i +"_2"]['val'] = $scope.saved_cards[i][2];
      $scope.cards['saved' + i +"_2"]['suit'] = $scope.saved_cards[i][3];
    }
    run_multi_simulation($event, $scope.cards, $scope.handleData);
  };
  
  $scope.save_hand = function($event) {
    var cardpair1; var cardpair2;
    cardpair1 = $scope.cards['holecard1']['val'] + $scope.cards['holecard1']['suit']
    cardpair2 = $scope.cards['holecard2']['val'] + $scope.cards['holecard2']['suit']
    var saved_hand = cardpair1 + '' + cardpair2;
    console.log("Card saved: " + saved_hand);
    $scope.saved_cards.push(saved_hand);
    $scope.cards['holecard1'] = {
      'val' : undefined,
      'suit' : undefined
    };
    $scope.cards['holecard2'] = {
      'val' : undefined,
      'suit' : undefined
    };
    
    // $scope.refreshImgs();
    $scope.image['holecard1'] = "//:0";
    $scope.image['holecard2'] = "//:0";
  };
  
  $scope.refreshImgs = function() {
    $scope.$apply(function(){
      $scope.image['holecard1'] = "//:0";
      $scope.image['holecard2'] = "//:0";
    });
  }
  
  $scope.handleData = function(data) {
    // need this to force the update of the digest cycle
    console.log(data);
    $scope.$apply(function(){
      $scope.results = data.slice(1);
    });
    
  };
  
});