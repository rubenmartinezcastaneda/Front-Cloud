'use strict';

// Declare app level module which depends on views, and components
angular.module('modRIBBVA', [
  'ngRoute',
  'angularjs-datetime-picker',
  'modRIBBVA.login',
  'modRIBBVA.main',
  'modRIBBVA.services',
  'modRIBBVA.agreementRequest',
  'modRIBBVA.profileManagerService',
  'modRIBBVA.profileManager',
  'modRIBBVA.userManagerService',
  'modRIBBVA.userManager',
  'modRIBBVA.reportManagerService',
  'modRIBBVA.reportManager',
  'modRIBBVA.authorizerManagerService',
  'modRIBBVA.authorizerManager'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}])

    .controller('ApplicationController', function ($scope,
                                                   $location,
                                                   AuthService) {
      $scope.isAuthenticate = AuthService.isAuthenticate();
      $scope.userLog = AuthService.getUserLog();

      if($location.path()=="/login"){
        $scope.isLogin = true;
      }


      $scope.endSession = function () {
        AuthService.endSession();
        $location.path('/login');
      };

    })

;
