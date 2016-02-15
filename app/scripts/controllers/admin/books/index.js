'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controllers.admin.books:IndexBookCtrl
 * @description
 * # IndexBookCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('IndexBookCtrl', function ($scope, $firebaseObject) {
    var firebaseUrl = new Firebase('https://store-database.firebaseio.com/');
    var bookUrl = firebaseUrl.child('book');
    // Get list book
    var list = $firebaseObject(bookUrl);
    list.$bindTo($scope,"data");
  });
