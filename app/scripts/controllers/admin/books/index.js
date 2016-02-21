'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controllers.admin.books:IndexBookCtrl
 * @description
 * # IndexBookCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('IndexBookCtrl', function ($scope, $routeParams, Book) {
    // Get list of books
    $scope.books = Book;
    // Get single book by book id
    $scope.books.$loaded().then(function(list){
      $scope.item = Book.$getRecord($routeParams.id);
    });
    // Edit book
    $scope.editBook = function(){
      console.log($scope.item);
      var save = $scope.books.$save($scope.item);
      if (save) {
        alert("Save success!");
      }
      else {
        alert("Something wrong! Try again!");
      }
    };
  });
