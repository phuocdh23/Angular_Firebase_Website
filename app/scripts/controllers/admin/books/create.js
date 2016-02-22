'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controllers.admin.books:CreateBookCtrl
 * @description
 * # CreateBookCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('CreateBookCtrl', function ($scope, $location, Book) {
    $scope.book = Book;
    $scope.addBook = function() {
      // Get data from ng-model
      var save = $scope.book.$add({
        title: $scope.book.title,
        price: $scope.book.price,
        description: $scope.book.description,
      });
      // Save data into Firebase
      if (save) {
        alert('Create success');
        $scope.book = "";
      }
      else {
        alert('Something wrong!');
      }
    };
  });
