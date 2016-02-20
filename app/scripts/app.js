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
  .value('firebaseUrl', 'https://store-database.firebaseio.com/')
  .value('book_table', 'book')
  .factory('Book', function($firebaseArray, firebaseUrl, book_table){
    return $firebaseArray(new Firebase(firebaseUrl + '/' + book_table));
  })
  .config(function ($routeProvider) {
    $routeProvider
      // HOME PAGE
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
      //SHOW BOOK DETAILS
      .when('/books/show/:id', {
        templateUrl: 'views/books/show.html',
        controller: 'IndexBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
