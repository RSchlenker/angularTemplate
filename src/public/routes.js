var router = angular.module('routes',['ui.router']);

router.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    views: {
      'navigation': {
        templateUrl: 'public/partials/navbar/navbar.html',
        controller: 'navbarCtrl'
      },
      'content': {
        templateUrl: 'public/partials/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })
  .state('thread', {
    url: '/thread/{topicId}',
    params: {thread: null},
    views: {
      'content': {
        templateUrl: 'public/partials/thread/threadView.html',
        controller: 'threadCtrl'
      },
      'navigation': {
        templateUrl: 'public/partials/navbar/navbar.html',
        controller: 'navbarCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('dashboard');
}]);
