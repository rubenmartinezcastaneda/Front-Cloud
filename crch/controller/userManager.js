'use strict';

angular.module('modRIBBVA.userManager', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/user/manager/create', {
            templateUrl: 'view/create_user_prin.html',
            controller: 'UserManagerCtrl'
        })
        .when('/user/manager/modify', {
            templateUrl: 'view/modification_user_prin.html',
            controller: 'UserManagerCtrl'
        })
        .when('/user/manager/consult', {
            templateUrl: 'view/consult_user_prin.html',
            controller: 'UserManagerCtrl'
        })
    ;
}])

.controller('UserManagerCtrl', function ($scope, $filter, $location, UserManagerService) {
    $scope.auxData = {};
    $scope.rowList = [];
    $scope.isValid = false;


    $scope.orderProfileList = function(list){
        var rowList = [];
        var aux = [];

        for (var i = 0; i < list.length; i++) {
            if (i != 0 && i % 3 == 0) {
                rowList.push(aux);
                aux = [];
            }

            aux.push(list[i]);
        }

        if (aux.length != 0) {
            rowList.push(aux);
        }
        $scope.rowList = rowList;
    };

    $scope.getProfileList = function(){
        var profileList = UserManagerService.consultProfiles();

        if($scope.rowList.length == 0) {
            $scope.orderProfileList(profileList);
        }

        return $scope.rowList;
    };


    $scope.selectionProfile = function(profile){
        var unselect = false;

        if(typeof $scope.auxData.user.profiles != 'undefined'){
            for(var i = 0; i <  $scope.auxData.user.profiles.length; i++){
                if(profile.idProfile == $scope.auxData.user.profiles[i].idProfile){
                    unselect = true;
                    $scope.auxData.user.profiles.splice(i,1);
                    i = $scope.auxData.user.profiles.length;
                }
            }
        }else{
            $scope.auxData.user.profiles = [];
        }


        if(unselect == false){
            $scope.auxData.user.profiles.push(profile);
        }
    };

    $scope.userValid = function(userCode) {
        var resp = false;

        if(userCode.length == 7){
            if(userCode == 'C333333'){
                alert("Usuario existente, por favor ingrese a la opci\xF3n de modificaci\xF3n");
            }else if(userCode != ''){
                $scope.auxData.user = UserManagerService.consultUser(userCode);
                resp = true;
            }
        }else{
            $scope.auxData.user = {};
            $scope.auxData.user.code = userCode;
        }

        $scope.auxData.user.profiles = [];

        $scope.isValid = resp;
    }

    $scope.backMain = function () {
        $location.path('/main');
    };

    $scope.saveUser = function () {
        UserManagerService.saveUser($scope.auxData.user);
    };

    $scope.cleanConsult = function(){
        $scope.auxData.user = {};
        $scope.rowList = [];
        $scope.isValid = false;
    };

    $scope.searchUser = function (){
        var clean = false;

        if($scope.auxData.search.code.length == 7){
            $scope.auxData.user = UserManagerService.consultRegisteredUser($scope.auxData.search.code);

            if($scope.auxData.user != null){

                var profileList = UserManagerService.consultProfiles();

                for(var i = 0; i < $scope.auxData.user.profiles.length; i++){
                    for(var f = 0; f < profileList.length; f++){
                        if($scope.auxData.user.profiles[i].idProfile == profileList[f].idProfile){
                            $scope.auxData.user.profiles[i] = profileList[f];
                            profileList[f].select = true;
                        }
                    }
                }

                $scope.orderProfileList(profileList);
                $scope.isValid = true;

            }else{
                clean = true;
            }

        }else{
            clean = true;
        }

        if(clean){
            $scope.cleanConsult();
            alert("Usuario no encontrado");
        }
    };

    $scope.modifyUser = function(){
        if(UserManagerService.modifyUser($scope.auxData.user)){
            alert("Modificaci\xF3n realizada");
        }
    };



});