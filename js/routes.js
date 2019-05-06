angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mENU.iNICIO', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iNICIO.html',
        controller: 'iNICIOCtrl'
      }
    }
  })

  .state('mENU.cAMISETAS', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cAMISETAS.html',
        controller: 'cAMISETASCtrl'
      }
    }
  })

  .state('mENU.rELGIOS', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rELGIOS.html',
        controller: 'rELGIOSCtrl'
      }
    }
  })

  .state('mENU', {
    url: '/side-menu21',
    templateUrl: 'templates/mENU.html',
    controller: 'mENUCtrl'
  })

  .state('mENU.bONS', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bONS.html',
        controller: 'bONSCtrl'
      }
    }
  })

  .state('mENU.cadastro', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});