'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  // .value('FIREBASE_URL', 'https://waitandeat-randy.firebaseio.com/');
  .factory('FIREBASE_URL', function() {
    return 'https://waitandeat-randy.firebaseio.com/';
  });
