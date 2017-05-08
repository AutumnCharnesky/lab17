// declaring main app
var app = angular.module('redditMod', []);

// calling angular app
  var app = angular.module('redditMod');

// declaring controller within the app
    app.controller('reddit', function($scope, $http) {

      $scope.posts = [];

// gets information from subreddit, if successfully called posts information, otherwise posts error
      $http({
        method: 'GET',
        url: 'http://www.reddit.com/r/tsunderesharks.json'
      }).then(function successCallback(response) {
        $scope.posts = response.data.data.children;
      }, function(error) {
        console.log(error);
      });

    });

// custom directivesending information received from subreddit and returns as elements to tsundereSharks.html
    app.directive('tsundereSharks', function() {

      return {
        restrict: 'AE',
        replace: false,
        templateUrl: 'HTMLStyling/tsundereSharks.html'
      }
    })

    
