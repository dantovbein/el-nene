function InitialDownloadFile(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/initial-download-file.html";
}

inheritPrototype(InitialDownloadFile,ViewFormFiles);

InitialDownloadFile.prototype.constructor = InitialDownloadFile;

InitialDownloadFile.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	Utilities.setHeight($(this.node).find(".wrapper-download-file-form"));
	this.addHandlers();
}

InitialDownloadFile.prototype.addHandlers = function(){
	ViewFormFiles.prototype.addHandlers.call(this);
	$(this.node).find(".btn-registered").click( { context:this }, this.getRegisteredForm );
	$(this.node).find(".btn-registration").click( { context:this }, this.getRegistrationForm );
}

InitialDownloadFile.prototype.getRegisteredForm = function(e){
	var self = e.data.context;
	$(self.node).trigger( { type : Globals.USER_REGISTERED } );
}

InitialDownloadFile.prototype.getRegistrationForm = function(e){
	var self = e.data.context;
	$(self.node).trigger( { type : Globals.USER_REGISTRATION } );
}