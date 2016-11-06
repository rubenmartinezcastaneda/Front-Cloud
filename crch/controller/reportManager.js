'use strict';

angular.module('modRIBBVA.reportManager', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/report/selecttype', {
            templateUrl: 'view/selecttypereports.html',
            controller: 'ReportManagerCtrl'
        })
        .when('/report/main', {
            templateUrl: 'view/report_prin.html',
            controller: 'ReportManagerCtrl'
        })
    ;
}])

.controller('ReportManagerCtrl', function ($scope, $location, ReportManagerService) {
    $scope.auxData = {};

    $scope.type = ReportManagerService.getType();

    $scope.selectType = function(type){
        ReportManagerService.setType(type);
        $location.path('/report/main');
    };

    $scope.cleanAux = function(){
        $scope.auxData.filter = {};
        $scope.auxData.result = [];
    };

    $scope.genReport = function (option) {
        if(option == 1){
            $scope.auxData.result = ReportManagerService.genReportAgreementStatistical(
                $scope.auxData.filter.agreementNumber,
                $scope.auxData.filter.requestNumber,
                $scope.auxData.filter.idNumber,
                $scope.auxData.filter.startDate,
                $scope.auxData.filter.endDate
            );
        }else if(option == 2){
            $scope.auxData.result = ReportManagerService.genReportExistingAgreements(
                $scope.auxData.filter.agreementNumber,
                $scope.auxData.filter.requestNumber,
                $scope.auxData.filter.idNumber,
                $scope.auxData.filter.startDate,
                $scope.auxData.filter.endDate
            );
        }else if(option == 3){
            $scope.auxData.result = ReportManagerService.genReportAgreementParam(
                $scope.auxData.filter.agreementNumber,
                $scope.auxData.filter.agreementName,
                $scope.auxData.filter.creationDate,
                $scope.auxData.filter.channel,
                $scope.auxData.filter.idNumber
            );
        }else if(option == 4){
            $scope.auxData.result = ReportManagerService.genReportRequests(
                $scope.auxData.filter.executive,
                $scope.auxData.filter.requestStatus,
                $scope.auxData.filter.startDate,
                $scope.auxData.filter.endDate,
                $scope.auxData.filter.idNumber
            );
        }else if(option == 5){
            $scope.auxData.result = ReportManagerService.genReportAudit(
                $scope.auxData.filter.agreementNumber,
                $scope.auxData.filter.requestNumber,
                $scope.auxData.filter.idNumber,
                $scope.auxData.filter.startDate,
                $scope.auxData.filter.endDate
            );
        }else if(option == 6){
            $scope.auxData.result = ReportManagerService.genReportCollectCard(
                $scope.auxData.filter.agreementNumber,
                $scope.auxData.filter.requestNumber,
                $scope.auxData.filter.idNumber,
                $scope.auxData.filter.startDate,
                $scope.auxData.filter.endDate
            );
        }
    };

    $scope.exportReportCSV = function(){
        alert("Genera CSV");
    };

    $scope.exportReportExcel = function(){
        alert("Genera Excel");
    };

    $scope.printReport = function(){
        alert("Imprimir");
    };

    $scope.goBack = function(){
        $location.path('/main');
    };

});