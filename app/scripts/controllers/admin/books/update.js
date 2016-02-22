'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controllers.admin.books:EditBookCtrl
 * @description
 * # EditBookCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('EditBookCtrl', function ($scope, $routeParams, Book) {
    Book.$loaded().then(function(){
      $scope.item = Book.$getRecord($routeParams.id);
    });
    // Edit book
    $scope.editBook = function(){
      var save = Book.$save($scope.item);
      if (save) {
        alert("Save success!");
        window.history.back();
      }
      else {
        alert("Something wrong! Try again!");
      }
    };
  });
