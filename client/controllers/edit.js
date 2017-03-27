angular.module('edit', [

])
.controller('EditCtrl', function($scope, $http, $stateParams) {

  var id = $stateParams.id;
  console.log(id);

  $http({method: 'GET', url: '/api/contact/'+id}).success(function(data, status, headers, config) {
    //console.log(data.contacts[0]);
    $scope.contact = data.contact;
  });


    $scope.edit = function (id) {
      $http({method: 'PUT', url: '/api/edit/'+id}).success(function(data, status, headers, config) {
      });
    };


//  $http.delete('/api/index/'+id).success(function (data, status) {
//           console.log(data);
//       });
});
