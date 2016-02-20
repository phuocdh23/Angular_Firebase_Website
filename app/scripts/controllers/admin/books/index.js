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
    $scope.books = Book;
    $scope.books.$loaded().then(function(list){
      $scope.item = list.$getRecord($routeParams.id);
    })
  });
