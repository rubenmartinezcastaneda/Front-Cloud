'use strict';

angular.module('modRIBBVA.userManagerService', [])

    .factory('UserManagerService', function ($http) {
        var userManagerService = {};

        userManagerService.consultProfiles = function(){
            var listProfile = [
                {idProfile:1,name: 'Transaccional'},
                {idProfile:2,name: 'Consulta'},
                {idProfile:3,name: 'Auditoria'},
                {idProfile:4,name: 'Administrador'},
                {idProfile:5,name: 'Validador'}
            ];
            return listProfile;
        };

        userManagerService.consultUser = function(userCode){
            var user = {
                code:userCode,
                name: 'Nombre 1',
                phoneNumber: "33333333",
                idType: "Cédula de Ciudadanía",
                idNumber: "125896386",
                email: "prueba@bbva.com"
            };

            return user;
        };

        userManagerService.saveUser = function(user){
            alert("Alta de Usuario realizada");
        };

        userManagerService.consultRegisteredUser = function(userCode){
            var user = {
                code:userCode,
                name: 'Nombre 1',
                phoneNumber: "33333333",
                idType: "Cédula de Ciudadanía",
                idNumber: "125896386",
                email: "prueba@bbva.com",
                profiles : [
                    {
                        idProfile:1
                    },
                    {
                        idProfile:5
                    }
                ]
            };

            if(userCode == 'C333333'){
                return null;
            }

            return user;
        };

        userManagerService.modifyUser = function(modifyUser){
            return true;
        };

        return userManagerService;
    })
