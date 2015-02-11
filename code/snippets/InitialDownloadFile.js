function InitialDownloadFile(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/initial-download-file.html";
	this.USER_REGISTERED = "userRegistered";
	this.USER_REGISTRATION = "userRegistration";
}

inheritPrototype(InitialDownloadFile,ViewFormFiles);

InitialDownloadFile.prototype.constructor = InitialDownloadFile;

InitialDownloadFile.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	this.addHandlers();
}

InitialDownloadFile.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	$(this.node).find(".btn-registered").click( { context:this }, this.getRegisteredForm );
	$(this.node).find(".btn-registration").click( { context:this }, this.getRegistrationForm );
}

InitialDownloadFile.prototype.getRegisteredForm = function(e){
	var self = e.data.context;
	$(self.node).trigger( { type : self.USER_REGISTERED } );
}

InitialDownloadFile.prototype.getRegistrationForm = function(e){
	var self = e.data.context;
	$(self.node).trigger( { type : self.USER_REGISTRATION } );
}