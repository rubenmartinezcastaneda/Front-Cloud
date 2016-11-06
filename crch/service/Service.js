'use strict';

angular.module('modRIBBVA.services', [])

.factory('AuthService', function ($http) {
    var authService = {};

    authService.haveSession = false;

    authService.login = function (credentials) {
        authService.haveSession = true;

        authService.user = {
            name: "Nombre",
            firstname: "Apellido",
            lastAccess: "01/01/2000 00:00:00",
            profile: "Perfil de usuario"
        };

        return authService.haveSession;
    };

    authService.endSession = function (){
        authService.user = {};
        authService.haveSession = false;
    };


    authService.getUserLog = function (){
        return authService.user;
    };

    authService.isAuthenticate = function (){
        return authService.haveSession;
    };

    return authService;
})

.factory('RequestAgreementService', function ($http) {
    var requestAgreementService = {};

    var paymentForm = [];
    var collectFiles = [];
    var associtedAgreements = [{ean: "", account: "", numAgreement: ""}];
    var unifiedwebServices = [{type: "", class: "", code: ""}];
    var dbvalidatevalues = [{valvalue: false}];
    var dbvalidatedatesHeader = [{valdate: false}];
    var dbvalidatedatesDetail = [{valdate: false}];
    var fixedValues = [{}];
    var collectAccounts = [{}];
    var dispersionAccounts = [{}];
    var references = [{}];
    var refAdditionals = [{}];
    var reffixedvalues = [{}];
    var refdates = [{}];
    var refvalues = [{}];

    requestAgreementService.type = '';
    requestAgreementService.operation = '';
    requestAgreementService.gendata = {};
    requestAgreementService.db = {};
    requestAgreementService.ofile = {};
    requestAgreementService.captype = {};
    requestAgreementService.pingen = {};
    requestAgreementService.colManyAccounts = {};
    requestAgreementService.confDispersionAccounts = {};
    requestAgreementService.specialparam = {};
    requestAgreementService.subproductparam = {};
    requestAgreementService.confreferences = {};

    requestAgreementService.chTerminals = {
        terminalAttachments: [],
        terminals: [{}]
    };

    requestAgreementService.chBBVNET_CASH = {
        BBVAnetCashAttachments: [],
        references: [{}]
    };

    requestAgreementService.chCallCenter = {};

    requestAgreementService.chATM = {
        attachments: []
    };

    requestAgreementService.chBancaMovil = {
        attachments: []
    };

    requestAgreementService.chPagaTiempo = {
        validateDates:[{}],
        validateAmounts:[{}]
    };

    requestAgreementService.chBankCorrespondent = {
        attachments: []
    };

    requestAgreementService.chPSE = {};

    requestAgreementService.chAttachments = {
        attachments: []
    };


    requestAgreementService.gendata.paymentForm = paymentForm;
    requestAgreementService.gendata.associtedAgreements = associtedAgreements;
    requestAgreementService.gendata.unifiedwebServices = unifiedwebServices;

    requestAgreementService.db.dbvalidatevalues = dbvalidatevalues;
    requestAgreementService.db.dbvalidatedatesHeader = dbvalidatedatesHeader;
    requestAgreementService.db.dbvalidatedatesDetail = dbvalidatedatesDetail;

    requestAgreementService.captype.collectFiles = collectFiles;

    requestAgreementService.pingen.fixedValues = fixedValues;

    requestAgreementService.colManyAccounts.collectAccounts = collectAccounts;

    requestAgreementService.confDispersionAccounts.dispersionAccounts = dispersionAccounts;

    requestAgreementService.confreferences.references = references;
    requestAgreementService.confreferences.refAdditionals = refAdditionals;
    requestAgreementService.confreferences.reffixedvalues = reffixedvalues;
    requestAgreementService.confreferences.refdates = refdates;
    requestAgreementService.confreferences.refvalues = refvalues;


    requestAgreementService.setType = function (type) {
        this.type = type;
    };

    requestAgreementService.getType = function (){
        return this.type;
    };

    requestAgreementService.setGendata = function (gendata) {
        this.gendata = gendata;
    };

    requestAgreementService.getGendata = function (){
        return this.gendata;
    };

    requestAgreementService.setDB = function (db) {
        this.db = db;
    };

    requestAgreementService.getDB = function (){
        return this.db;
    };


    requestAgreementService.setOFile = function (ofile) {
        this.ofile = ofile;
    };

    requestAgreementService.getOFile = function (){
        return this.ofile;
    };

    requestAgreementService.setCaptureType = function (captype) {
        this.captype = captype;
    };

    requestAgreementService.getCaptureType = function (){
        return this.captype;
    };


    requestAgreementService.setPingen = function (pingen) {
        this.pingen = pingen;
    };

    requestAgreementService.getPingen = function (){
        return this.pingen;
    };

    requestAgreementService.setColmaccounts = function (colManyAccounts) {
        this.colManyAccounts = colManyAccounts;
    };

    requestAgreementService.getColmaccounts = function (){
        return this.colManyAccounts;
    };


    requestAgreementService.setConfDispersionAccounts = function (confDispersionAccounts) {
        this.confDispersionAccounts = confDispersionAccounts;
    };

    requestAgreementService.getConfDispersionAccounts = function (){
        return this.confDispersionAccounts;
    };


    requestAgreementService.setSpecialparam = function (specialparam) {
        this.specialparam = specialparam;
    };

    requestAgreementService.getSpecialparam = function (){
        return this.specialparam;
    };

    requestAgreementService.setSubproductparam = function (subproductparam) {
        this.subproductparam = subproductparam;
    };

    requestAgreementService.getSubproductparam = function (){
        return this.subproductparam;
    };

    requestAgreementService.setConfReferences = function (confreferences) {
        this.confreferences = confreferences;
    };

    requestAgreementService.getConfReferences = function (){
        return this.confreferences;
    };


    requestAgreementService.setChTerminals = function (chTerminals) {
        this.chTerminals = chTerminals;
    };

    requestAgreementService.getChTerminals = function (){
        return this.chTerminals;
    };


    requestAgreementService.addChTerminal = function(){
        if(this.chTerminals.terminals.length < 28){
            this.chTerminals.terminals.push({ });
        }
    };

    requestAgreementService.removeChTerminal  = function(index){
        this.chTerminals.terminals.splice(index,1);

        if(this.chTerminals.terminals.length == 0){
            this.chTerminals.terminals.push({ });
        }
    };



    requestAgreementService.addTerminalAttachmentFile= function(){

        if(this.chTerminals.attachmentType != '' && typeof this.chTerminals.attachmentType != 'undefined') {
            var f = document.getElementById('fileTerminal').files[0];

            if(typeof f != 'undefined'){
                this.chTerminals.terminalAttachments.push({
                    type: this.chTerminals.attachmentType,
                    file_res: f
                });
            }else {
                alert("Seleccione un archivo");
            }

        }else{
            alert("Seleccione un tipo de anexo");
        }
    };

    requestAgreementService.removeTerminalAttachmentFile  = function(index){
        this.chTerminals.terminalAttachments.splice(index,1);
    };

    requestAgreementService.loadManageBank = function (account){
        var intAccount = account;

        if(intAccount != '' && typeof intAccount != 'undefined')
            return 'BBVA Prueba '+account;
        else
            return '';
    };

    requestAgreementService.addPaymentForm = function (paymentform){
        if(typeof paymentform != 'undefined') {
            var pay = paymentform.split("-");

            if (pay.length > 0 && paymentform != '') {
                var valid = true;

                for (var i = 0; i < this.gendata.paymentForm.length; i++) {
                    if (this.gendata.paymentForm[i].original == paymentform)
                        valid = false;
                }

                if (valid) {
                    this.gendata.paymentForm.push({
                        id: pay[0],
                        name: pay[1],
                        original: paymentform
                    });
                } else {
                    alert("Forma de pago ya seleccionada.");
                }

            }
        }

    };

    requestAgreementService.removePaymentForm = function (paymentform){
        if(typeof paymentform != 'undefined') {
            for (var i = 0; i < this.gendata.paymentForm.length; i++) {
                if (this.gendata.paymentForm[i].original == paymentform)
                    this.gendata.paymentForm.splice(i,1);
            }
        }
    };


    requestAgreementService.init = function(){
        this.type = '';
        this.gendata = {};
        this.db = {};
        this.ofile = {};
        this.captype = {};
        this.pingen = {};
        this.colManyAccounts = {};
        this.confDispersionAccounts = {};
        this.specialparam = {};
        this.subproductparam = {};
        this.confreferences = {};

        this.chTerminals = {
            terminalAttachments: [],
            terminals: [{}]
        };

        this.chBBVNET_CASH = {
            BBVAnetCashAttachments: [],
            references: [{}]
        };

        this.chCallCenter = {};

        this.chATM = {
            attachments: []
        };

        this.chPagaTiempo = {
            validateDates:[{}],
            validateAmounts:[{}]
        };

        this.chBankCorrespondent = {
            attachments: []
        };

        this.chPSE = {};

        dbvalidatevalues = [{valvalue:false}];
        dbvalidatedatesHeader = [{valdate:false}];
        dbvalidatedatesDetail = [{valdate:false}];
        paymentForm = [];
        associtedAgreements = [{ean:"",account:"",numAgreement:""}];
        collectFiles = [];
        fixedValues = [{}];
        collectAccounts = [{}];
        dispersionAccounts = [{}];
        unifiedwebServices = [{type: "", class: "", code: ""}];
        references = [{}];
        refAdditionals = [{}];
        reffixedvalues = [{}];
        refdates = [{}];
        refvalues = [{}];


        this.gendata.paymentForm = paymentForm;
        this.gendata.associtedAgreements = associtedAgreements;
        this.gendata.unifiedwebServices = unifiedwebServices;

        this.db.dbvalidatevalues = dbvalidatevalues;
        this.db.dbvalidatedatesHeader = dbvalidatedatesHeader;
        this.db.dbvalidatedatesDetail = dbvalidatedatesDetail;

        this.captype.collectFiles = collectFiles;

        this.pingen.fixedValues = fixedValues;

        this.colManyAccounts.collectAccounts = collectAccounts;

        this.confDispersionAccounts.dispersionAccounts = dispersionAccounts;

        this.confreferences.references = references;
        this.confreferences.refAdditionals = refAdditionals;
        this.confreferences.reffixedvalues = reffixedvalues;
        this.confreferences.refdates = refdates;
        this.confreferences.refvalues = refvalues;
    };

    requestAgreementService.addAnotherAssociatedAgreement = function(){
        if(this.gendata.associtedAgreements.length < 10){
            this.gendata.associtedAgreements.push({
                ean:"",
                account:"",
                numAgreement:""
            });
        }
    };

    requestAgreementService.removeAssociatedAgreement  = function(index){
        this.gendata.associtedAgreements.splice(index,1);

        if(this.gendata.associtedAgreements.length == 0){
            this.gendata.associtedAgreements.push({
                ean:"",
                account:"",
                numAgreement:""
            });
        }
    };

    requestAgreementService.addAnotherUnifiedWS = function(){
        this.gendata.unifiedwebServices.push({type:"",class:"",code:""});
    };

    requestAgreementService.removeUnifiedWS  = function(index){
        this.gendata.unifiedwebServices.splice(index,1);

        if(this.gendata.unifiedwebServices.length == 0){
            this.gendata.unifiedwebServices.push({type:"",class:"",code:""});
        }
    };


    requestAgreementService.addAnotherValue = function(){
        this.db.dbvalidatevalues.push({valvalue:false});
    };

    requestAgreementService.removeValue  = function(index){
        this.db.dbvalidatevalues.splice(index,1);

        if(this.db.dbvalidatevalues.length == 0){
            this.db.dbvalidatevalues.push({valvalue:false});
        }
    };

    requestAgreementService.addAnotherValDateHeader = function(){
        this.db.dbvalidatedatesHeader.push({valdate:false});
    };

    requestAgreementService.removeValDateHeader  = function(index){
        this.db.dbvalidatedatesHeader.splice(index,1);

        if(this.db.dbvalidatedatesHeader.length == 0){
            this.db.dbvalidatedatesHeader.push({valdate:false});
        }
    };

    requestAgreementService.addAnotherValDateDetail = function(){
        this.db.dbvalidatedatesDetail.push({valdate:false});
    };

    requestAgreementService.removeValDateDetail  = function(index){
        this.db.dbvalidatedatesDetail.splice(index,1);

        if(this.db.dbvalidatedatesDetail.length == 0){
            this.db.dbvalidatedatesDetail.push({valdate:false});
        }
    };


    requestAgreementService.addCollectFile = function(){

        var f = document.getElementById('file').files[0];

        /*
         $scope.add = function(){
         var f = document.getElementById('file').files[0],
         r = new FileReader();
         r.onloadend = function(e){
         var data = e.target.result;
         //send you binary data via $http or $resource or do anything else with it
         }
         r.readAsBinaryString(f);
         }

         */

        this.captype.collectFiles.push({
            file_res:f
        });
    };

    requestAgreementService.removeCollectFile  = function(index){
        this.captype.collectFiles.splice(index,1);
    };

    requestAgreementService.addFixedValue = function(){
        this.pingen.fixedValues.push({});
    };

    requestAgreementService.removeFixedValue  = function(index){
        this.pingen.fixedValues.splice(index,1);

        if(this.pingen.fixedValues.length == 0){
            this.pingen.fixedValues.push({});
        }
    };

    requestAgreementService.addCollectAccount = function(){
        this.colManyAccounts.collectAccounts.push({});
    };

    requestAgreementService.removeCollectAccount  = function(index){
        this.colManyAccounts.collectAccounts.splice(index,1);

        if(this.colManyAccounts.collectAccounts.length == 0){
            this.colManyAccounts.collectAccounts.push({});
        }
    };

    requestAgreementService.addDispersionAccount = function(){
        this.confDispersionAccounts.dispersionAccounts.push({});
    };

    requestAgreementService.removeDispersionAccount  = function(index){
        this.confDispersionAccounts.dispersionAccounts.splice(index,1);

        if(this.confDispersionAccounts.dispersionAccounts.length == 0){
            this.confDispersionAccounts.dispersionAccounts.push({});
        }
    };

    requestAgreementService.addReference = function(){
        this.confreferences.references.push({});
    };

    requestAgreementService.removeReference  = function(index){
        this.confreferences.references.splice(index,1);

        if(this.confreferences.references.length == 0){
            this.confreferences.references.push({});
        }
    };


    requestAgreementService.addRefAdditional = function(){
        this.confreferences.refAdditionals.push({});
    };

    requestAgreementService.removeRefAdditional  = function(index){
        this.confreferences.refAdditionals.splice(index,1);

        if(this.confreferences.refAdditionals.length == 0){
            this.confreferences.refAdditionals.push({});
        }
    };

    requestAgreementService.addRefFixedValue = function(){
        this.confreferences.reffixedvalues.push({});
    };

    requestAgreementService.removeRefFixedValue  = function(index){
        this.confreferences.reffixedvalues.splice(index,1);

        if(this.confreferences.reffixedvalues.length == 0){
            this.confreferences.reffixedvalues.push({});
        }
    };

    requestAgreementService.addRefDate = function(){
        this.confreferences.refdates.push({});
    };

    requestAgreementService.removeRefDate  = function(index){
        this.confreferences.refdates.splice(index,1);

        if(this.confreferences.refdates.length == 0){
            this.confreferences.refdates.push({});
        }
    };


    requestAgreementService.addRefValue = function(){
        this.confreferences.refvalues.push({});
    };

    requestAgreementService.removeRefValue  = function(index){
        this.confreferences.refvalues.splice(index,1);

        if(this.confreferences.refvalues.length == 0){
            this.confreferences.refvalues.push({});
        }
    };


    this.chBBVNET_CASH = {
        BBVAnetCashAttachments: [],
        references: [{}]
    };


    requestAgreementService.setChBBVNET_CASH = function (chBBVNET_CASH) {
        this.chBBVNET_CASH = chBBVNET_CASH;
    };

    requestAgreementService.getChBBVNET_CASH = function (){
        return this.chBBVNET_CASH;
    };


    requestAgreementService.addChBBVNET_CASHReference = function(){
        if(this.chBBVNET_CASH.references.length < 2){
            this.chBBVNET_CASH.references.push({ });
        }
    };

    requestAgreementService.removeChBBVNET_CASHReference  = function(index){
        this.chBBVNET_CASH.references.splice(index,1);

        if(this.chBBVNET_CASH.references.length == 0){
            this.chBBVNET_CASH.references.push({ });
        }
    };



    requestAgreementService.addBBVANETAttachmentFile= function(){

        if(this.chBBVNET_CASH.attachmentType != '' && typeof this.chBBVNET_CASH.attachmentType != 'undefined') {
            var f = document.getElementById('fileBBVA').files[0];

            if(typeof f != 'undefined'){
                this.chBBVNET_CASH.BBVAnetCashAttachments.push({
                    type: this.chBBVNET_CASH.attachmentType,
                    file_res: f
                });
            }else {
                alert("Seleccione un archivo");
            }

        }else{
            alert("Seleccione un tipo de anexo");
        }
    };

    requestAgreementService.removeBBVANETAttachmentFile  = function(index){
        this.chBBVNET_CASH.BBVAnetCashAttachments.splice(index,1);
    };

    requestAgreementService.setChCallCenter = function (chCallCenter) {
        this.chCallCenter = chCallCenter;
    };

    requestAgreementService.getChCallCenter = function (){
        return this.chCallCenter;
    };

    requestAgreementService.setChATM = function (chATM) {
        this.chATM = chATM;
    };

    requestAgreementService.getChATM = function (){
        return this.chATM;
    };

    requestAgreementService.addChATMAttachmentFile = function(){

        if(this.chATM.attachmentType != '' && typeof this.chATM.attachmentType != 'undefined') {
            var f = document.getElementById('fileATM').files[0];

            if(typeof f != 'undefined'){
                this.chATM.attachments.push({
                    type: this.chATM.attachmentType,
                    file_res: f
                });
            }else {
                alert("Seleccione un archivo");
            }

        }else{
            alert("Seleccione un tipo de anexo");
        }
    };

    requestAgreementService.removeChATMAttachmentFile  = function(index){
        this.chATM.attachments.splice(index,1);
    };



    requestAgreementService.setChBancaMovil = function (chBancaMovil) {
        this.chBancaMovil = chBancaMovil;
    };

    requestAgreementService.getChBancaMovil = function (){
        return this.chBancaMovil;
    };

    requestAgreementService.addChBancaMovilAttachmentFile = function(){

        if(this.chBancaMovil.attachmentType != '' && typeof this.chBancaMovil.attachmentType != 'undefined') {
            var f = document.getElementById('fileMovil').files[0];

            if(typeof f != 'undefined'){
                this.chBancaMovil.attachments.push({
                    type: this.chBancaMovil.attachmentType,
                    file_res: f
                });
            }else {
                alert("Seleccione un archivo");
            }

        }else{
            alert("Seleccione un tipo de anexo");
        }
    };

    requestAgreementService.removeChBancaMovilAttachmentFile  = function(index){
        this.chBancaMovil.attachments.splice(index,1);
    };


    requestAgreementService.setChPagaTiempo = function (chPagaTiempo) {
        this.chPagaTiempo = chPagaTiempo;
    };

    requestAgreementService.getChPagaTiempo = function (){
        return this.chPagaTiempo;
    };

    requestAgreementService.addPagatiempoValidateDate = function(){
        this.chPagaTiempo.validateDates.push({});
    };

    requestAgreementService.removePagatiempoValidateDate  = function(index){
        this.chPagaTiempo.validateDates.splice(index,1);

        if(this.chPagaTiempo.validateDates.length == 0){
            this.chPagaTiempo.validateDates.push({});
        }
    };

    requestAgreementService.addPagatiempoValidateAmount = function(){
        this.chPagaTiempo.validateAmounts.push({});
    };

    requestAgreementService.removePagatiempoValidateAmount  = function(index){
        this.chPagaTiempo.validateAmounts.splice(index,1);

        if(this.chPagaTiempo.validateAmounts.length == 0){
            this.chPagaTiempo.validateAmounts.push({});
        }
    };

    requestAgreementService.setChBankCorrespondent = function (chBankCorrespondent) {
        this.chBankCorrespondent = chBankCorrespondent;
    };

    requestAgreementService.getChBankCorrespondent = function (){
        return this.chBankCorrespondent;
    };

    requestAgreementService.addChBankCorrespondentAttachmentFile = function(){

        if(this.chBankCorrespondent.attachmentType != '' && typeof this.chBankCorrespondent.attachmentType != 'undefined') {
            var f = document.getElementById('fileCorrespondent').files[0];

            if(typeof f != 'undefined'){
                this.chBankCorrespondent.attachments.push({
                    type: this.chBankCorrespondent.attachmentType,
                    file_res: f
                });
            }else {
                alert("Seleccione un archivo");
            }

        }else{
            alert("Seleccione un tipo de anexo");
        }
    };

    requestAgreementService.removeChBankCorrespondentAttachmentFile  = function(index){
        this.chBankCorrespondent.attachments.splice(index,1);
    };

    requestAgreementService.setChPSE = function (chPSE) {
        this.chPSE = chPSE;
    };

    requestAgreementService.getChPSE = function (){
        return this.chPSE;
    };



    requestAgreementService.setChAttachments = function (chAttachments) {
        this.chAttachments = chAttachments;
    };

    requestAgreementService.getChAttachments = function (){
        return this.chAttachments;
    };

    requestAgreementService.addOtherAttachmentFile = function(){
        var f = document.getElementById('fileOther').files[0];

        if(typeof f != 'undefined'){
            this.chAttachments.attachments.push({
                type: this.chAttachments.attachmentType,
                file_res: f
            });
        }else {
            alert("Seleccione un archivo");
        }
    };

    requestAgreementService.removeChOtherAttachmentFile  = function(index){
        this.chAttachments.attachments.splice(index,1);
    };


    requestAgreementService.sendRequest  = function(){
        alert("La información ha sido enviada correctamente y se encuentra en validación.");
    };

    requestAgreementService.modifyRequest  = function(){
        alert("La información ha sido modificada correctamente.");
    };

    requestAgreementService.deleteRequest  = function(){
        if(confirm("Confirma eliminar la creaci\xF3n del convenio? ")){
            alert("Eliminaci\xF3n del convenio realizada correctamente.");
        }
    };


    requestAgreementService.printResume = function(){
        alert("Impresión");
    };


    requestAgreementService.searchAgreementRequest = function(idNumber, agreementType, agreementCode, requestNumber, description, action){

        var result = [
            {
                name: 'Prueba 1',
                status: 'Enviada',
                idNumber : idNumber,
                agreementType : agreementType,
                agreementCode : agreementCode,
                requestNumber : requestNumber,
                description : description
            },
            {
                name: 'Prueba 2',
                status: 'Validada',
                idNumber : idNumber,
                agreementType : agreementType,
                agreementCode : agreementCode,
                requestNumber : requestNumber,
                description : description
            }];

        return result;
    };


    requestAgreementService.exportRequestExcel = function(){
      alert("Exporta Excel");
    };

    return requestAgreementService;
})




;