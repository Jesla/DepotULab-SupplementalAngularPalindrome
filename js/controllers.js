var controllers = angular.module('angularPalindrome.controllers', ["ngRoute"]);
controllers.controller("WelcomePageController", ["$rootScope", "$scope", "$location", function ($rootScope, $scope, $location) {

    $scope.submitButton = function (wordInput) {
        if ($scope.wordInput === undefined) {
            alert("Please enter a word.");
        } else {
            $location.path("words/" + wordInput)
        };
        $scope.wordInput = undefined;
    };

}]);

controllers.controller("WordsPageController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    $scope.origWord = $routeParams.newWord.toLowerCase();
    // console.log($scope.origWord);
    $scope.wordArray = $scope.origWord.split("").reverse().join("");
    // console.log($scope.wordArray);
    $scope.$watch("origWord", function () {
        if ($scope.origWord === $scope.wordArray) {
            $scope.result = "This word is a palindrome."
            // console.log("YAY");
        } else {
            $scope.result = "This word is not a palindrome."
            // console.log("BOO");
        };
    });
}]);