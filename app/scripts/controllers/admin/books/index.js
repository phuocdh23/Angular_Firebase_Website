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
    $scope.books.$loaded().then(function(){
      $scope.item = Book.$getRecord($routeParams.id);
    });
    // Delete book
    $scope.removeBook = function(key){
      var item = $scope.books.$getRecord(key);
      var confirmed = confirm("Are you still want to delete "+ item.title + "?");
      if (confirmed) {
        var destroy = $scope.books.$remove(item);
        if(destroy) {
          alert("Deleted!");
        }
        else {
          alert("Something wrong!");
        }
      }
    };
  });
