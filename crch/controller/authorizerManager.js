'use strict';

angular.module('modRIBBVA.authorizerManager', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/authorizer/pending', {
            templateUrl: 'view/auth_pending_requests.html',
            controller: 'AuthorizerManagerCtrl'
        })
        .when('/authorizer/approved', {
            templateUrl: 'view/auth_approved_requests.html',
            controller: 'AuthorizerManagerCtrl'
        })
        .when('/authorizer/rejected', {
            templateUrl: 'view/auth_rejected_requests.html',
            controller: 'AuthorizerManagerCtrl'
        })
        .when('/authorizer/detail', {
            templateUrl: 'view/auth_request_detail.html',
            controller: 'AuthorizerManagerCtrl'
        })
    ;
}])

.controller('AuthorizerManagerCtrl', function ($scope, $location, AuthorizerManagerService) {

    $scope.getListValues = function(option){
        if(option == 'P'){
            $scope.dataTable = AuthorizerManagerService.getPendingRequests();
        }else if(option == 'A'){
            $scope.dataTable = AuthorizerManagerService.getApprovedRequests();
        }else if(option == 'R'){
            $scope.dataTable = AuthorizerManagerService.getRejectedRequests();
        }
    };
    /*
    The modules ID are:
     1 - Datos Generales
     2 - Base de Datos
     3 - Información de Referencia
     4 - Archivo de Salida
     5 - Tipo de Captura
     6 - Generación Pin
     7 - Cuentas de recaudo para recaudo dirigido a más de una cuenta
     8 - Cuentas dispersión de impuestos
     9 - Parámetros Especiales de Impuestos
     10 - Parámetros Subproductos Rec. de Impuestos
     11 - Terminal Financiero
     12 - BBVA NET y BBVA NET CASH
     13 - Call Center
     14 - ATM
     15 - Banca Móvil
     16 - PagaTiempo
     17 - Corresponsal Bancario
     18 - Tus Pagos PSE
     19 - Anexo de Documentos
     */


    $scope.rejectModule = function(requestId, moduleId){
        var comments = prompt("Ingrese motivo del rechazo", "");

        if (comments != null) {
            if(comments.trim() != '') {
                var isRejected = AuthorizerManagerService.rejectModule(requestId, moduleId,comments);
                if(isRejected){
                    alert("M\xF3dulo rechazado correctamente.");
                    $location.path('/authorizer/pending');
                }
            }else{
                alert("Por favor diligencie el motivo de rechazo.");
            }
        }
    };

    $scope.approveModule = function(requestId, moduleId){

        var completlyValidated = AuthorizerManagerService.isCompletlyValidated(requestId);

        if(!completlyValidated){
            var saved = AuthorizerManagerService.approveModule(requestId, moduleId);

            if(saved){
                alert("M\xF3dulo aprobado correctamente.");
            }
        }else{
            alert("La solicitud No. "+requestId+" ha sido aprobada.");
        }
    };

    $scope.setParametersDetail = function(requestId, action){
        AuthorizerManagerService.setQueryParameters(requestId, action);
        $location.path('/authorizer/detail');
    };


    //action is P when request is pending  A when request is approved  R when request is Reject
    $scope.getRequestDetail = function(){
        var resultConsult = AuthorizerManagerService.getRequestDetail();

        $scope.type = resultConsult.type;
        $scope.gendata = resultConsult.gendata;
        $scope.db = resultConsult.db;
        $scope.ofile = resultConsult.ofile;
        $scope.captype = resultConsult.captype;
        $scope.pingen = resultConsult.pingen;
        $scope.colManyAccounts = resultConsult.colManyAccounts;
        $scope.confDispersionAccounts = resultConsult.confDispersionAccounts;
        $scope.specialparam = resultConsult.specialparam;
        $scope.subproductparam = resultConsult.subproductparam;
        $scope.confreferences = resultConsult.confreferences;
        $scope.chTerminals = resultConsult.chTerminals;
        $scope.chBBVNET_CASH = resultConsult.chBBVNET_CASH;
        $scope.chCallCenter = resultConsult.chCallCenter;
        $scope.chATM = resultConsult.chATM;
        $scope.chBancaMovil = resultConsult.chBancaMovil;
        $scope.chPagaTiempo = resultConsult.chPagaTiempo;
        $scope.chBankCorrespondent = resultConsult.chBankCorrespondent;
        $scope.chPSE = resultConsult.chPSE;
        $scope.chAttachments = resultConsult.chAttachments;
        $scope.action = resultConsult.action;
        $scope.requestId = resultConsult.requestId;
        $scope.requestStatus = resultConsult.requestStatus;

    };

    $scope.goBack = function(action){
        if(action == 'P'){
            $location.path('/authorizer/pending');
        }else if(action == 'A'){
            $location.path('/authorizer/approved');
        }else if(action == 'R'){
            $location.path('/authorizer/rejected');
        }else{
            $location.path('/main');
        }
    };

    $scope.printResume = function () {
        alert("Imprimir");
    };

    $scope.printTable = function (data, action) {
        alert("Imprimir tabla");
    };

});