angular.module('myApp.twitter-service', [])
.service('TwitterService', function($http) {
    this.search = (search_params) => {
      return $http.get('/twitter/search',
          {params:search_params})
        .then((response) =>{
          return Promise.resolve(response.data)
        });
    }

    this.getAllLanguages = ()=> {
      return $http.get('/twitter/get_languages')
      .then((response) =>{
        return Promise.resolve(response.data)
      });
    }
});