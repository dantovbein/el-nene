function ConfirmationFile(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/confirmation-file.html";
	this.fileId = this.config.fileId;
}

inheritPrototype(ConfirmationFile,ViewFormFiles);

ConfirmationFile.prototype.constructor = ConfirmationFile;

ConfirmationFile.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);	
	this.getFile(this.fileId);
	
}

ConfirmationFile.prototype.getFile = function(fileId) {
	$(this.node).find(".form-title").html("Chequeando archivo...");
	var emailRegistered;
	$.ajax({
		context : this,
		async : false,
		type : "POST",
		data : { fileId:fileId },
		url : "service/manager/getFile.php",
		success : function(r) {
			var result = JSON.parse(r); 
			if(result.length==0){
				alert(Globals.ERROR_FILE_IN_DATABASE);
				return false;
			}
			
			var urlFile = result[0].filePath + result[0].fileName;
			if(this.checkFile(urlFile)){
				$(this.node).find(".form-title").html("¡Ya podés descargarlo!");
				this.addConfirmationFormButton({ dataAction : Globals.DOWNLOAD_FILE,textButton : "Descargar", filePath:result[0].filePath, fileName:result[0].fileName });
				this.addHandlers();
			}else{
				alert(Globals.MESSAGE_NOT_EXIST);
			}
		},
		error : function(error) {
			debugger;
		}
	});
	return emailRegistered;
}

ConfirmationFile.prototype.checkFile = function(urlFile) {
	var exist;
	$.ajax({
		context:this,
		async:false,
    	url:urlFile,
    	type:'HEAD',
    	success: function(){
        	exist = true;
    	},
    	error: function() {
        	exist = false;
    	}    
	});
	return exist;
}

ConfirmationFile.prototype.addConfirmationFormButton = function(dataConfirmationButton) {
	ViewFormFiles.prototype.addConfirmationFormButton.call(this,dataConfirmationButton);	
	this.buttonConfirmationForm.onDownload({ filePath:dataConfirmationButton.filePath, fileName:dataConfirmationButton.fileName });
}
