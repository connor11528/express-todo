'use strict';

var app = angular.module('express-todo', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

// bootstrap application
window.onLoadCallback = function(){
  // when document's ready
  angular.element(document).ready(function(){
    // bootstrap oauth2 library
    gapi.client.load('oath2', 'v2', function(){
      // bootstrap angular app
      angular.bootstrap(document, ['express-todo'])
    })
  })
}

// routing
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({ redirectTo: '/' })
}]);
