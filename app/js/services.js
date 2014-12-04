'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('FIREBASE_URL', 'https://waitandeat-randy.firebaseio.com/')  // Use .value because our example is simple, otherwise use the commented out factory below
  // .factory('FIREBASE_URL', function() {
  //   return 'https://waitandeat-randy.firebaseio.com/';
  // })
  .factory('authService', function ($firebaseSimpleLogin, $location, FIREBASE_URL) {
    var authRef = new Firebase(FIREBASE_URL);
    var auth = $firebaseSimpleLogin(authRef);

    return {
      login: function(user) {
        auth.$login('password', user).then(function(data) {
          console.log(data);
          // Redirect users to /waitlist
          $location.path('/waitlist');
        });
        }
    };
  });
