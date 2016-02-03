'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MainCtrl', function ($scope, $object) {
    var firebaseUrl = new Firebase('https://store-database.firebaseio.com/');
    var bookUrl = firebaseUrl.child('book');
    // $scope.list = $object(bookUrl);
    // console.log($scope.list);
    // $scope.listBook = [];
    // $scope.click = alert("Hello");
    $scope.addItem = function(item) {
      // alert(item.title);
      this.bookTitle = item.title
      this.bookPrice = item.price
      bookUrl.push(
        {
          title: this.bookTitle,
          price: this.bookPrice
        });
      item.val('');
  };

  });
