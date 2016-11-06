'use strict';

angular.module('modRIBBVA.profileManagerService', [])

    .factory('ProfileManagerService', function ($http) {
        var profileManagerService = {};
        var listProfile = [{idProfile:1,name: 'Nombre 1'},{idProfile:2,name: 'Nombre 2'}];

        profileManagerService.consultProfiles = function(){
            return listProfile;
        };

        profileManagerService.createProfile = function(name){

            listProfile.push({idProfile:listProfile.length ,name: name});

        };

        profileManagerService.consultProfileDetail = function(idProfile){

            var appFaculties = [
                {
                    idFaculty : 1,
                    name:"Convenio (Operador)"
                },
                {
                    idFaculty : 2,
                    name:"Convenio (Autorizador)"
                },
                {
                    idFaculty : 3,
                    name:"Administrador"
                },
                {
                    idFaculty : 4,
                    name:"Consulta"
                },
                {
                    idFaculty : 5,
                    name:"Super usuario"
                },
                {
                    idFaculty : 6,
                    name:"Auditor\xEDa"
                },
                {
                    idFaculty: 7,
                    name: "Informes"
                }
            ];




            var resp = {
                idProfile : idProfile,
                name: 'Perfil '+idProfile,
                faculties: [
                    {
                        idFaculty : 1,
                        name:"Convenio (Operador)"
                    }
                ],
                facAvailable:[]
            };

            for(var i = 0; i < resp.faculties.length ; i++){
                for(var j = 0; j < appFaculties.length ; j++){
                    if(appFaculties[j].idFaculty == resp.faculties[i].idFaculty){
                        appFaculties.splice(j,1);
                        j = appFaculties.length;
                    }
                }
            }

            resp.facAvailable = appFaculties;

            return resp;
        };

        profileManagerService.saveProfile = function (profile){
            alert("Perfil modificado correctamente");
        }

        return profileManagerService;
    })
