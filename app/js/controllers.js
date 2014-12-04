'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', 'partyService', 'textMessageService', function($scope, partyService, textMessageService) {
    // Binds firebase parties to $scope
    $scope.parties = partyService.parties;

    // Object to store data from the waitlist form
    $scope.newParty = {
      name: '',
      phone: '',
      size: '',
      done: false,
      notified: 'No'
    };

    // Function to save a new party to the waitlist
    $scope.saveParty = function() {
      partyService.saveParty($scope.newParty);
      // Reset form after adding party
      $scope.newParty = {
        name: '',
        phone: '',
        size: '',
        done: false,
        notified: 'No'
      };
    };

    // Function to send text message to party
    $scope.sendTextMessage = function(party) {
      textMessageService.sendTextMessage(party);
    };
  }])
  .controller('AuthController', ['$scope', 'authService', function($scope, authService) {
    
    // Object bound to inputs on the register and login pages.
    $scope.user = {
      email: '',
      password: ''
    };

    // Method to register a new user using the authService
    $scope.register = function() {
      authService.register($scope.user);
    };

    // Method to login a user using the authService
    $scope.login = function() {
      authService.login($scope.user);
    };

    // Method to log out a user using the authService
    $scope.logout = function() {
      authService.logout();
    };
  }]);






















