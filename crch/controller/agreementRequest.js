'use strict';

angular.module('modRIBBVA.agreementRequest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/agreement/reqselect', {
            templateUrl: 'view/selecttypeagreement.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqcreate', {
            templateUrl: 'view/create_agreement_prin.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqcreate/channels', {
            templateUrl: 'view/create_agreement_channels.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqcreate/resume', {
            templateUrl: 'view/agreement_resume.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/seamodify', {
            templateUrl: 'view/selecttypemodagreement.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqmodify', {
            templateUrl: 'view/modification_filter_agreement.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqmodify/general', {
            templateUrl: 'view/modification_agreement_prin.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqmodify/channels', {
            templateUrl: 'view/modification_agreement_channels.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqmodify/resume', {
            templateUrl: 'view/modification_filter_resumen.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/seaconsult', {
            templateUrl: 'view/selecttypeconsagreement.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqconsult', {
            templateUrl: 'view/consult_filter_agreement.html',
            controller: 'RequestAgreementCtrl'
        })
        .when('/agreement/reqconsult/resume', {
            templateUrl: 'view/consult_filter_resumen.html',
            controller: 'RequestAgreementCtrl'
        })
    ;
}])

.controller('RequestAgreementCtrl', function ($scope, $location, RequestAgreementService) {
    $scope.type = RequestAgreementService.getType();
    $scope.gendata = RequestAgreementService.getGendata();
    $scope.db = RequestAgreementService.getDB();
    $scope.ofile = RequestAgreementService.getOFile();
    $scope.captype = RequestAgreementService.getCaptureType();
    $scope.pingen = RequestAgreementService.getPingen();
    $scope.colManyAccounts = RequestAgreementService.getColmaccounts();
    $scope.confDispersionAccounts = RequestAgreementService.getConfDispersionAccounts();
    $scope.specialparam = RequestAgreementService.getSpecialparam();
    $scope.subproductparam = RequestAgreementService.getSubproductparam();
    $scope.confreferences = RequestAgreementService.getConfReferences();
    $scope.chTerminals = RequestAgreementService.getChTerminals();
    $scope.formConsult = {};
    $scope.resultAgreement;

    $scope.selectType = function (type) {
        RequestAgreementService.operation = 'C';
        RequestAgreementService.init();
        RequestAgreementService.setType(type);
        $location.path('/agreement/reqcreate');
    };

    $scope.searchForModification = function(type){
        RequestAgreementService.operation = 'M';
        RequestAgreementService.setType(type);
        $location.path('/agreement/reqmodify');
    };

    $scope.searchForConsult = function(type){
        RequestAgreementService.operation = 'Q';
        RequestAgreementService.setType(type);
        $location.path('/agreement/reqconsult');
    };

    $scope.exportRequestExcel = function(){
        RequestAgreementService.exportRequestExcel();
    };

    $scope.cleanFormConsult = function(){
        $scope.formConsult = {};
        $scope.resultAgreement = [];
    };

    $scope.consultAgreement = function(option){
        $scope.resultAgreement = RequestAgreementService.searchAgreementRequest(
                                        $scope.formConsult.idNum,
                                        $scope.formConsult.collectType,
                                        $scope.formConsult.agreementCode,
                                        $scope.formConsult.requestNumber,
                                        $scope.formConsult.description,
                                        option);

        if($scope.resultAgreement.length == 0){
            alert("Convenio no existe. Por favor corregir.");
        }
    };

    $scope.goToModification = function (data){
        $location.path('/agreement/reqmodify/general');
    };

    $scope.goToResume = function (data){
        $scope.gendata.agreementName = data.name;
        $scope.gendata.status = data.status;
        $location.path('/agreement/reqconsult/resume');
    };

    $scope.goToStep2Mod = function () {
        $location.path('/agreement/reqmodify/channels');
    };

    $scope.goToStep1Mod = function () {
        $location.path('/agreement/reqmodify/general');
    };

    $scope.goToStep3Mod = function () {
        $location.path('/agreement/reqmodify/resume');
    };


    $scope.modifyRequest  = function(){
        RequestAgreementService.modifyRequest();
    };

    $scope.deleteRequest  = function(){
        RequestAgreementService.deleteRequest();
    };

    /**
     * Functions SAVE
     *
     */

    $scope.saveGendata = function (gendata) {
        RequestAgreementService.setGendata(gendata);
    };

    $scope.saveDB = function (db) {
        RequestAgreementService.setDB(db);
    };

    $scope.saveOutputFile = function (ofile) {
        RequestAgreementService.setOFile(ofile);
    };

    $scope.saveCaptureType = function (captype) {
        RequestAgreementService.setCaptureType(captype);
    };

    $scope.savePingen = function (pingen) {
        RequestAgreementService.setPingen(pingen);
    };

    $scope.saveColManyAccounts = function (colManyAccounts) {
        RequestAgreementService.setColmaccounts(colManyAccounts);
    };

    $scope.saveConfDispersionAccounts = function (confDispersionAccounts) {
        RequestAgreementService.setConfDispersionAccounts(confDispersionAccounts);
    };

    $scope.saveSpecialParam = function (specialparam) {
        RequestAgreementService.setSpecialparam(specialparam);
    };

    $scope.saveSubproductParam = function (subproductparam) {
        RequestAgreementService.setSubproductparam(subproductparam);
    };

    $scope.saveConfReferences = function (confreferences) {
        RequestAgreementService.setConfReferences(confreferences);
    };

    $scope.saveChTerminals = function (chTerminals) {
         RequestAgreementService.setChTerminals(chTerminals);
    };


    $scope.getArrayReference = function() {

        if(typeof $scope.confreferences.field == 'undefined')
            return [];
        else if ($scope.confreferences.field == 'REF')
            return $scope.confreferences.references;
        else if ($scope.confreferences.field == 'ADI')
            return $scope.confreferences.refAdditionals;
        else if ($scope.confreferences.field == 'VAF')
            return $scope.confreferences.reffixedvalues;
        else if ($scope.confreferences.field == 'FEC')
            return $scope.confreferences.refdates;
        else if ($scope.confreferences.field == 'VAL')
            return $scope.confreferences.refvalues;
        else
            return [{}];
    };

    $scope.deleteRutineReference = function(referenceIndex){
        $scope.confreferences.references[referenceIndex].rutine = '';
        $scope.confreferences.references[referenceIndex].validationRutine = '';
    };

    $scope.deleteRutineAdditional = function(referenceIndex){
        $scope.confreferences.refAdditionals[referenceIndex].rutine = '';
        $scope.confreferences.refAdditionals[referenceIndex].validationRutine = '';
    };


    $scope.loadManageBank = function (account) {
        $scope.gendata.managerBank = RequestAgreementService.loadManageBank(account);
    };

    $scope.addPaymentForm = function (paymentform) {
        RequestAgreementService.addPaymentForm(paymentform);
    };

    $scope.removePaymentForm = function (paymentform) {
        RequestAgreementService.removePaymentForm(paymentform);
    };

    $scope.addAnotherAssociatedAgreement = function () {
        RequestAgreementService.addAnotherAssociatedAgreement();
    };

    $scope.removeAssociatedAgreement = function (index) {
        RequestAgreementService.removeAssociatedAgreement(index);
    };


    $scope.addAnotherUnifiedWS = function () {
        RequestAgreementService.addAnotherUnifiedWS();
    };

    $scope.removeUnifiedWS = function (index) {
        RequestAgreementService.removeUnifiedWS(index);
    };


    $scope.addAnotherValue = function(){
        RequestAgreementService.addAnotherValue();
    };

    $scope.removeValue  = function(index){
        RequestAgreementService.removeValue(index);
    };

    $scope.addAnotherValDateDetail = function(){
        RequestAgreementService.addAnotherValDateDetail();
    };

    $scope.removeValDateDetail  = function(index){
        RequestAgreementService.removeValDateDetail(index);
    };

    $scope.addAnotherValDateHeader = function(){
        RequestAgreementService.addAnotherValDateHeader();
    };

    $scope.removeValDateHeader  = function(index){
        RequestAgreementService.removeValDateHeader(index);
    };

    $scope.addFixedValue = function(){
        RequestAgreementService.addFixedValue();
    };

    $scope.removeFixedValue  = function(index){
        RequestAgreementService.removeFixedValue(index);
    };

    $scope.addCollectAccount = function(){
        RequestAgreementService.addCollectAccount();
    };

    $scope.removeCollectAccount  = function(index){
        RequestAgreementService.removeCollectAccount(index);
    };

    $scope.addCollectFile = function(){
        RequestAgreementService.addCollectFile();
    };

    $scope.removeCollectFile  = function(index){
        RequestAgreementService.removeCollectFile(index);
    };


    $scope.addDispersionAccount = function(){
        RequestAgreementService.addDispersionAccount();
    };

    $scope.removeDispersionAccount  = function(index){
        RequestAgreementService.removeDispersionAccount(index);
    };



    $scope.addReference = function(){
        RequestAgreementService.addReference();
    };

    $scope.removeReference  = function(index){
        RequestAgreementService.removeReference(index);
    };


    $scope.addRefAdditional = function(){
        RequestAgreementService.addRefAdditional()
    };

    $scope.removeRefAdditional  = function(index){
        RequestAgreementService.removeRefAdditional(index);
    };

    $scope.addRefFixedValue = function(){
        RequestAgreementService.addRefFixedValue();
    };

    $scope.removeRefFixedValue  = function(index){
        RequestAgreementService.removeRefFixedValue(index);
    };

    $scope.addRefDate = function(){
        RequestAgreementService.addRefDate();
    };

    $scope.removeRefDate  = function(index){
        RequestAgreementService.removeRefDate(index);
    };


    $scope.addRefValue = function(){
        RequestAgreementService.addRefValue();
    };

    $scope.removeRefValue  = function(index){
        RequestAgreementService.removeReValue(index);
    };

    $scope.addChTerminal  = function(){
        RequestAgreementService.addChTerminal();
    };

    $scope.removeChTerminal  = function(index){
        RequestAgreementService.removeChTerminal(index);
    };

    $scope.deleteMessage = function(){
      $scope.confreferences.message.text = "";
    };

    $scope.goToStep2 = function () {
        $location.path('/agreement/reqcreate/channels');
    };

    $scope.goToStartCreate = function () {
        $location.path('/agreement/reqselect');
    };

    $scope.goToStep1 = function () {
        $location.path('/agreement/reqcreate');
    };

    $scope.goToStep3 = function () {
        $location.path('/agreement/reqcreate/resume');
    };

    $scope.addTerminalAttachmentFile = function(){
        RequestAgreementService.addTerminalAttachmentFile();
    };

    $scope.removeTerminalAttachmentFile  = function(index){
        RequestAgreementService.removeTerminalAttachmentFile(index);
    };

    /**
     * Definición Datos Conf BBVA NET y NET CASH
     */
    // INICIO
    $scope.chBBVNET_CASH = RequestAgreementService.getChBBVNET_CASH();

    $scope.saveChBBVNET_CASH = function (chBBVNET_CASH) {
        RequestAgreementService.setChBBVNET_CASH(chBBVNET_CASH);
    };

    $scope.addChBBVNET_CASHReference = function(){
        RequestAgreementService.addChBBVNET_CASHReference();
    };

    $scope.removeChBBVNET_CASHReference  = function(index){
        RequestAgreementService.removeChBBVNET_CASHReference(index);
    };

    $scope.addBBVANETAttachmentFile = function(){
        RequestAgreementService.addBBVANETAttachmentFile();
    };

    $scope.removeBBVANETAttachmentFile  = function(index){
        RequestAgreementService.removeBBVANETAttachmentFile(index);
    };
    //FIN

    /**
     * Definición Datos Conf Call Center
     */

    // INICIO
    $scope.chCallCenter = RequestAgreementService.getChCallCenter();

    $scope.saveChCallCenter = function (chCallCenter) {
        RequestAgreementService.setChCallCenter(chCallCenter);
    };
    //FIN

    /**
     * Definición Datos Conf ATM
     */
    // INICIO
    $scope.chATM = RequestAgreementService.getChATM();

    $scope.saveChATM = function (chATM) {
        RequestAgreementService.setChATM(chATM);
    };


    $scope.addChATMAttachmentFile = function(){
        RequestAgreementService.addChATMAttachmentFile();
    };

    $scope.removeChATMAttachmentFile  = function(index){
        RequestAgreementService.removeChATMAttachmentFile(index);
    };
    //FIN

    /**
     * Definición Datos Conf Banca Movil
     */
        // INICIO
    $scope.chBancaMovil = RequestAgreementService.getChBancaMovil();

    $scope.saveChBancaMovil = function (chBancaMovil) {
        RequestAgreementService.setChBancaMovil(chBancaMovil);
    };


    $scope.addChBancaMovilAttachmentFile = function(){
        RequestAgreementService.addChBancaMovilAttachmentFile();
    };

    $scope.removeChBancaMovilAttachmentFile  = function(index){
        RequestAgreementService.removeChBancaMovilAttachmentFile(index);
    };
    //FIN

    /**
     * Definición Datos Conf Pagatiempo
     */
        // INICIO
    $scope.chPagaTiempo = RequestAgreementService.getChPagaTiempo();
    $scope.numFees = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];



    $scope.saveChPagaTiempo = function (chPagaTiempo) {
        RequestAgreementService.setChPagaTiempo(chPagaTiempo);
    };


    $scope.addPagatiempoValidateDate = function(){
        RequestAgreementService.addPagatiempoValidateDate();
    };

    $scope.removePagatiempoValidateDate  = function(index){
        RequestAgreementService.removePagatiempoValidateDate(index);
    };

    $scope.addPagatiempoValidateAmount = function(){
        RequestAgreementService.addPagatiempoValidateAmount();
    };

    $scope.removePagatiempoValidateAmount  = function(index){
        RequestAgreementService.removePagatiempoValidateAmount(index);
    };
    //FIN

    /**
     * Definición Datos Conf Pagatiempo
     */
    // INICIO
    $scope.chBankCorrespondent = RequestAgreementService.getChBankCorrespondent();

    $scope.saveChBankCorrespondent = function (chBankCorrespondent) {
        RequestAgreementService.setChBankCorrespondent(chBankCorrespondent);
    };

    $scope.addChBankCorrespondentAttachmentFile = function(){
        RequestAgreementService.addChBankCorrespondentAttachmentFile();
    };

    $scope.removeChBankCorrespondentAttachmentFile  = function(index){
        RequestAgreementService.removeChBankCorrespondentAttachmentFile(index);
    };

    //FIN

    /**
     * Definición Datos Conf PSE
     */
        // INICIO
    $scope.chPSE = RequestAgreementService.getChPSE();

    $scope.saveChPSE = function (chPSE) {
        RequestAgreementService.setChPSE(chPSE);
    };

    //FIN

    /**
     * Definición Datos Conf Anexos Adicionales
     */
        // INICIO
    $scope.chAttachments = RequestAgreementService.getChAttachments();

    $scope.saveChAttachments = function (chAttachments) {
        RequestAgreementService.setChAttachments(chAttachments);
    };

    $scope.addOtherAttachmentFile = function(){
        RequestAgreementService.addOtherAttachmentFile();
    };

    $scope.removeChOtherAttachmentFile  = function(index){
        RequestAgreementService.removeChOtherAttachmentFile(index);
    };

    //FIN

    $scope.sendRequest  = function(){
        RequestAgreementService.sendRequest();
    };

    $scope.printResume  = function(){
        RequestAgreementService.printResume();
    };

});