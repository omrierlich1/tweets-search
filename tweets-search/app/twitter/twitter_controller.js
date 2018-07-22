
angular.module('myApp.twitter', ['myApp.twitter-service'])

.controller('TwitterCtrl', ['$scope','$http', '$filter', 'TwitterService', function($scope, $http, $filter, TwitterService) {
    $scope.selected_tweet = null;

    TwitterService.getAllLanguages().then((languages)=> {
      $scope.languages = languages;
      $scope.selected_language = languages.find((language) => {return language.code === 'en'});
    }).catch((error)=>{
      alert("Languages could not be loaded")
    });

    $scope.search = ()=> {
      search_params = {
        q: $scope.hashtag,
        lang: $scope.selected_language.code,
        form: $filter('date')($scope.from, 'yyyy-MM-dd'),
        until: $filter('date')($scope.until, 'yyyy-MM-dd')
      }

      TwitterService.search(search_params).then((tweets)=> {
        tweets = tweets.map((tweet)=>{
          tweet.created_at = new Date(tweet.created_at);
          return tweet;
        })
        $scope.tweets = tweets;
      }).catch((error)=>{
        alert("Error in search")
      });
    }

    $scope.onTweetClick = (tweet)=> {
      $scope.selected_tweet = tweet;
    }

    $scope.getLast7DaysDate = ()=> {
      date = new Date();
      date.setDate(date.getDate() - 7);
      return $filter('date')(date, 'yyyy-MM-dd');
    }
}]);