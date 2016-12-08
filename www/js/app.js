// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

	 $ionicConfigProvider.views.maxCache(5);
	 
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
	$ionicConfigProvider.backButton.text(false);

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
.state('parametres', {
      url: '/parametres',
      templateUrl: 'views/parametres.html'
    })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html'
  })
  
  // setup an abstract state for the tabs directive
  
  .state('tab.profil', {
    url: '/profil',
    views: {
      'profil': {
        templateUrl: 'views/profil.html'
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('tab.experience', {
    url: '/experience',
    views: {
      'experience': {
        templateUrl: 'views/experience.html'
      }
    }
  })

  .state('tab.formation', {
      url: '/formation',
      views: {
        'formation': {
          templateUrl: 'views/formation.html'
        }
      }
    })	

  .state('tab.interet', {
    url: '/interet',
    views: {
      'interet': {
        templateUrl: 'views/interet.html'
      }
    }
  })
  
  .state('tab.competence', {
    url: '/competence',
    views: {
      'competence': {
        templateUrl: 'views/competence.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/profil');

});
