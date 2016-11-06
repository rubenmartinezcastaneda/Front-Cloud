'use strict';

angular.module('modRIBBVA.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'view/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function ($scope, $location, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.mlogin = true;
  $scope.menu = false;

  $scope.initSession = function (credentials) {
    if(credentials.username == 'user' && credentials.password == 'user'){
      AuthService.login(credentials);
      $location.path('/main');
    }else
      alert('Datos incorrectos');
  };
});