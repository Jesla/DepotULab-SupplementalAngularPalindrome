var controllers = angular.module('angularPalindrome', ["ngRoute"]);
controllers.controller("WelcomePageController", ["$rootScope", "$scope", "$routeParams", function($rootScope, $scope, $routeParams) {
    
    $scope.submitButton = function() {
        if ( $scope.wordInput === undefined) {
            alert("Please enter a word.");
        } else {
        // var wordArray = $scope.wordInput.toLowerCase().split("").reverse().join("");
        // console.log(wordArray);
        };
        // $scope.wordInput = undefined;
    };
    
}]);

controllers.controller("WordsPageController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
    $scope.displayWord = function() {
        // $scope.origWord = $routeParams.newWord
        // var word = $scope.wordInput;
        // console.log(word);
        
        // var wordArray = $scope.wordInput.toLowerCase().split("").reverse().join("");
        // console.log(wordArray);
    };

}]);


