'use strict';

angular.module('modRIBBVA.authorizerManagerService', [])

.factory('AuthorizerManagerService', function ($http) {
    var authorizerManagerService = {};

    authorizerManagerService.validatedRequest = true;

    authorizerManagerService.getPendingRequests = function(){
        var resp = [];
        var structureData = {
            requestId: "12258",
            agreementId: "1000024",
            idNumber: "900002563",
            agreementName: "Convenio Prueba",
            requestStatus: "Enviada",
            sendDate: "01/01/2000",
            sendHour: "00:00:00",
            service: "Alta",
            modField: "Creación"
        };

        resp.push(structureData);

        return resp;
    };

    authorizerManagerService.getApprovedRequests = function(){
        var resp = [];

        var structureData = {
            requestId: "12258",
            agreementId: "1000024",
            idNumber: "900002563",
            agreementName: "Convenio Prueba",
            requestStatus: "Enviada",
            sendDate: "01/01/2000",
            approveDate: "01/01/2000",
            service: "Alta",
            modField: "Creación",
            approveHour: "00:00:00"
        };

        resp.push(structureData);

        return resp;
    };

    authorizerManagerService.getRejectedRequests = function(){
        var resp = [];

        var structureData = {
            requestId: "12258",
            agreementId: "1000024",
            idNumber: "900002563",
            agreementName: "Convenio Prueba",
            requestStatus: "Enviada",
            sendDate: "01/01/2000",
            rejectDate: "01/01/2000",
            rejectHour: "00:00:00",
            service: "Modificación",
            modField: "Campo Prueba",
            rejectReason : "motivo de rechazo prueba"
        };

        resp.push(structureData);

        return resp;
    };


    authorizerManagerService.setQueryParameters = function(requestId, action){
        authorizerManagerService.requestId = requestId;
        authorizerManagerService.action = action;
    };

    authorizerManagerService.getRequestDetail = function(){
        var resp = {
            action : authorizerManagerService.action,
            requestId : authorizerManagerService.requestId,
            requestStatus : "Estado Prueba",
            type : "I",
            gendata : {
                paymentForm:[
                    {
                        id:"EFE",
                        name:"Efectivo",
                        original:"EFE-Efectivo"
                    },
                    {
                        id:"CHC",
                        name:"Cheque canje",
                        original:"CHC-Cheque canje"
                    }
                ],
                associtedAgreements:[
                    {
                        ean:"",
                        account:"",
                        numAgreement:""
                    }
                ],
                unifiedwebServices:[
                    {
                        type:"00",
                        class:"000",
                        code:"00012"
                    }
                ],
                typeId:"3",
                numId:"67890",
                verDigId:"4",
                accountType:"AH",
                numAccount:"00130073000199999999",
                managerBank:"BBVA Prueba 00130073000199999999",
                agreementType:"01",
                manager:"Gestor",
                managerMail:"gestor@bbva.com",
                agreementName:"Convenio Prueba",
                description:"Desc prueba 1",
                expiredDate:"01/07/2016",
                paymentFormExtract:"DC",
                numStandbyAccount:"00130052000144444444",
                inhouse:true,
                status:"A",
                massiveActive:false,
                multilot:false,
                consecutive:true,
                initHour:"0800",
                finalHour:"1200",
                alternatiEnterprise:{
                    type:"001",
                    code:"0078888",
                    class:"000"
                },
                documentTraffic:true,
                agreementAssociate:false
            }
        };

        return resp;
    };

    authorizerManagerService.approveModule = function(requestId, moduleId){
        return true;
    };


    authorizerManagerService.rejectModule = function(requestId, moduleId, comment){
        return true;
    };

    authorizerManagerService.isCompletlyValidated = function(requestId){
        authorizerManagerService.validatedRequest = !authorizerManagerService.validatedRequest;
        return authorizerManagerService.validatedRequest;
    };


    return authorizerManagerService;
});
