'use strict';

angular.module('modRIBBVA.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'view/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', function ($scope) {

});