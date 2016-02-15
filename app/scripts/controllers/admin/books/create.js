'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controllers.admin.books:CreateBookCtrl
 * @description
 * # CreateBookCtrl
 * Controller of the websiteApp
 */

angular.module('websiteApp')
  .controller('CreateBookCtrl', function ($scope, $firebaseObject) {
    var firebaseUrl = new Firebase('https://store-database.firebaseio.com/');
    var bookUrl = firebaseUrl.child('book');

    this.book = {};
    //addItem() for add Book into Firebase
    $scope.addItem = function() {
      this.bookTitle = this.book.title;
      this.bookPrice = this.book.price;
      this.bookDescription = this.book.description;
      bookUrl.push(
        {
          title: this.bookTitle,
          price: this.bookPrice,
          description: this.bookDescription
        });
      //Clear fields and show notification when save success!!!
      this.book = {};
      alert("Create success!")
      };

  });
