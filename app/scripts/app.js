'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // HOME PAGE
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // ABOUT PAGE
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      // CREAT NEW BOOK
      .when('/admin/book/create', {
        templateUrl: 'views/books/create.html',
        controller: 'CreateBookCtrl'
      })
      // SHOW LIST BOOK
      .when('/admin/book/index', {
        templateUrl: 'views/books/index.html',
        controller: 'IndexBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
