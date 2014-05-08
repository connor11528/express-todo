'use strict';

var app = angular.module('battleshipApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BattleshipCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // enable CORS
      // $httpProvider.defaults.useXDomain = true;
      // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
