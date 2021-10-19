var marketManApp = angular.module('MarketManApp.controllers', []);

marketManApp.controller('userController', function($scope, userAPIservice) {
  userAPIservice.getUser().success(function (response) {
    console.log(response);
});


});