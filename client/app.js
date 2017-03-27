angular.module('contactbook', [
  'ui.router',
  'index',
  'show',
  'edit'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider
  .state('index', {
    url: '/index',
    templateUrl: 'views/partial-index.html',
    controller:'indexCtrl'
  })
  .state('new', {
    url: '/new',
    views: {
      '': { templateUrl: 'views/partial-new.html' }
    }
  })
  .state('show', {
    url: '/show/:id',
    templateUrl: 'views/partial-show.html',
    controller:'showCtrl'
  })
  .state('edit', {
    url: '/edit/:id',
    templateUrl: 'views/partial-edit.html',
    controller:'EditCtrl'
  });
})

.controller('MainCtrl', function ($scope, $state) {
  console.log(1);
});
