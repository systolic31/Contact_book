angular.module('index', [

])

.config(function ($stateProvider) {
      $stateProvider
          .state('index', {
              url: '/index',
              views: {
                      controller: 'indexCtrl',
                      templateUrl: 'views/index.html'
              }
          })
      ;
  })
.controller('indexCtrl', function($scope, $http) {
    $http.get("localhost:3000/api/contact")
    .then(function (response) {$scope.contacts = response.data;});
    console.log(response.data);
});
