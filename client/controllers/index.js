angular.module('index', [

])
.controller('indexCtrl', function($scope, $http) {

    $http({method: 'GET', url: '/api/contact'}).success(function(data, status, headers, config) {
      $scope.contacts = data.contacts;
      console.log($scope.contacts);
    });
});
