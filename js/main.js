var app = angular.module('angularPalindrome', ['angularPalindrome.controllers', 'ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomePageController'
        })
        .when('/words/:newWord', {
            templateUrl: 'views/words.html',
            controller: 'WordsPageController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);