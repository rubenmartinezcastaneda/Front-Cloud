'use strict';

angular.module('modRIBBVA.reportManagerService', [])

    .factory('ReportManagerService', function ($http) {
        var reportManagerService = {};

        reportManagerService.type = '';

        reportManagerService.setType = function(selType){
            this.type = selType;
        };

        reportManagerService.getType = function(){
            return this.type;
        };

        reportManagerService.genReportAgreementStatistical =  function(agreement, request, idNumber, startDate, endDate){
            var resp = [
                {
                    requestNum : request,
                    agreementNum : agreement,
                    collectDate : startDate,
                    idNum : idNumber,
                    agreementType : "01",
                    description : "Prueba convenio 1",
                    channel : "Terminal Financiera",
                    transactionCount: "23",
                    totalAmount: 15000000.00,
                    commissionAmount: 10000.00
                }
            ];

            return resp;
        };

        reportManagerService.genReportExistingAgreements =  function(agreement, request, idNumber, startDate, endDate){
            var resp = [
                {
                    requesterCode: "C999999",
                    requestDate : startDate,
                    agreementCode : agreement,
                    agreementName : "Convenio Prueba",
                    idNum : idNumber,
                    banking : "01",
                    office : "0073",
                    manager: "C999998",
                    collectAccount: "00130073000112345678",
                    agreementType: "01",
                    agreementStatus: "activo",
                    lastModificationDate: startDate,
                    requestIdLastModification : "133568"
                }
            ];

            return resp;
        };

        reportManagerService.genReportAgreementParam = function(agreementNumber, agreementName, creationDate, channel, idNumber){
            var resp = [
                {
                    agreementCode : agreementNumber,
                    agreementName : agreementName,
                    idNum : idNumber,
                    creationDate: creationDate,
                    agreementType: "01",
                    collectAccount: "00130073000112345678",
                    standbyAccount: "00130073000112340000",
                    validateDB: "Sí",
                    loadFile: "Asobancaria 2001",
                    frequency: "Incremental",
                    captureType: "Manual",
                    useEANcode: "Sí",
                    activeChannels: "Terminal Financiera",
                    infoReferences : [
                        {
                            reference:1,
                            length: 15
                        },
                        {
                            reference:2,
                            length: 16
                        },
                        {
                            reference:3,
                            length: 17
                        },
                        {
                            reference:4,
                            length: 18
                        },
                        {
                            reference:5,
                            length: 17
                        }
                    ],
                    exitPosition: 999,
                    outputFile: "Estandar BBVA",
                    outputFrequency: "Diaria",
                    deliveryType: "Incremental"
                }
            ];

            return resp;
        };

        reportManagerService.genReportRequests = function(executive, requestStatus, startDate, endDate, idNumber){
            var resp = [
                {
                    requestId: "88887456",
                    userCode: "C999999",
                    userName: "Juan Perez",
                    requestDate: startDate,
                    responseDate: endDate,
                    agreementCode : "0028871",
                    agreementName : "Convenio Prueba 1",
                    idNumber : idNumber,
                    requestStatus : requestStatus,
                    agreementStatus: "Activo",
                    authorizingUser: "C999988",
                    filters: "Filtros"
                }
            ];

            return resp;
        };

        reportManagerService.genReportAudit =  function(agreement, request, idNumber, startDate, endDate){
            var resp = [
                {
                    requestNum : request,
                    agreementNum : agreement,
                    agreementName : "Convenio Prueba",
                    idNumber : idNumber,
                    transaction: "Operación",
                    field: "Campo",
                    fieldType: "tipo campo",
                    moduleName: "Módulo",
                    beforeParam : "Valor Anterior",
                    newParam : "Valor Nuevo",
                    operationDate: startDate,
                    operationHour: "00:11:00",
                    userCode: "C99998"
                }
            ];

            return resp;
        };

        reportManagerService.genReportCollectCard =  function(agreement, request, idNumber, startDate, endDate){
            var resp = [
                {
                    requestNum : request,
                    agreementNum : agreement,
                    idNumber : idNumber,
                    requestDate: startDate,
                    numberCards: 11,
                    chargingState: "Pendiente"
                }
            ];

            return resp;
        };



        return reportManagerService;
    })
