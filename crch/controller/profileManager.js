'use strict';

angular.module('modRIBBVA.profileManager', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/profile/manager', {
            templateUrl: 'view/create_profiles.html',
            controller: 'ProfileManagerCtrl'
        })
    ;
}])

.controller('ProfileManagerCtrl', function ($scope, $location, ProfileManagerService) {
    $scope.auxData = {};

    $scope.auxData.listProfiles = ProfileManagerService.consultProfiles();

    $scope.createProfile = function(){
        ProfileManagerService.createProfile($scope.auxData.newProfileName);
    };

    $scope.selectProfile = function(){
        $scope.auxData.profile = ProfileManagerService.consultProfileDetail($scope.auxData.selectProfile);
    };

    $scope.addFaculties = function(){

        for(var i = 0; i < $scope.auxData.selAvailableFac.length ; i++){
            for(var j = 0; j < $scope.auxData.profile.facAvailable.length ; j++){
                if($scope.auxData.profile.facAvailable[j].idFaculty == $scope.auxData.selAvailableFac[i]){
                    $scope.auxData.profile.faculties.push($scope.auxData.profile.facAvailable[j]);
                    $scope.auxData.profile.facAvailable.splice(j,1);
                    j = $scope.auxData.profile.facAvailable.length;
                }
            }
        }
    };

    $scope.removeFaculties = function(){

        for(var i = 0; i < $scope.auxData.remSelectedFac.length ; i++){
            for(var j = 0; j < $scope.auxData.profile.faculties.length ; j++){
                if($scope.auxData.profile.faculties[j].idFaculty == $scope.auxData.remSelectedFac[i]){
                    $scope.auxData.profile.facAvailable.push($scope.auxData.profile.faculties[j]);
                    $scope.auxData.profile.faculties.splice(j,1);
                    j = $scope.auxData.profile.faculties.length;
                }
            }
        }
    };
    
    $scope.backMain = function () {
        $location.path('/main');
    };

    $scope.saveProfile = function () {
        ProfileManagerService.saveProfile($scope.auxData.profile);
    };

});