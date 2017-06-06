var app = angular.module("poker")

app.controller('DropDownCtrl', ['$scope', function ($scope) {
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
}]);