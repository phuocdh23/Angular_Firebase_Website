'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('MainCtrl', function ($scope, $firebaseObject) {
    var firebaseUrl = new Firebase('https://store-database.firebaseio.com/');
    var bookUrl = firebaseUrl.child('book');
    var list = $firebaseObject(bookUrl);
    list.$bindTo($scope,"data");

    //addItem() for add Book into Firebase
    $scope.addItem = function(item) {
      this.bookTitle = item.title
      this.bookPrice = item.price
      bookUrl.push(
        {
          title: this.bookTitle,
          price: this.bookPrice
        });
      //Clear fields when save success!!!
  };

  });
