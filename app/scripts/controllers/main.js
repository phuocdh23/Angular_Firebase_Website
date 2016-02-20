'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('MainCtrl', function ($scope, Book) {
    $scope.books = Book;
  });
