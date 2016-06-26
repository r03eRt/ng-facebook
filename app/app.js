'use strict';

// Declare app level module which depends on views, and components
angular.module('ngApp', [
  'ngRoute',
  'ngApp.view1',
  'ngApp.view2',
  'ngApp.facebook',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
