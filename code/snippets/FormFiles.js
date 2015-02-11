function FormFiles(config){
	Popup.call(this,config);
	this.pathSnippet = "snippets/form-files.html";
	this.INITIAL_DOWNLOAD_FILE = "initialDownloadFile";
	this.USER_REGISTERED = "userRegistered";
	this.USER_REGISTRATION = "userRegistration";
	this.defaultFormView = this.INITIAL_DOWNLOAD_FILE;

	this.pdfFIleID = this.config.pdfFIleID;
	this.dataSnippet = [ this.pdfFIleID ];
}

inheritPrototype(FormFiles,Popup);

FormFiles.prototype.constructor = FormFiles;

FormFiles.prototype.initialize = function(){
	Popup.prototype.initialize.call(this);
	this.getFormView(this.defaultFormView);
	$(this.node).css({
		left:-$(this.node).width(),
		top:$(window).height() / 2 - $(this.node).height() / 2,
		opacity:0
	});

	$(this.node).animate({
		left:0,
		opacity:1
	},400);
	this.addHandlers();
}

FormFiles.prototype.addHandlers = function() {
	Popup.prototype.addHandlers.call(this);
	$(this.node).find(".btn-close").click( { context:this }, function(e){
		e.data.context.onClosePopup();
	});

}

FormFiles.prototype.getFormView = function(view){
	var container = $(this.node).find(".view-form-file");
	$(container).empty();

	var formView;
	var dataView = { container:container };
	switch(view){
		case this.INITIAL_DOWNLOAD_FILE:
			formView = new InitialDownloadFile(dataView);
			break;
		case this.USER_REGISTERED:
			formView = new UserRegistered(dataView);
			break;
		case this.USER_REGISTRATION:
			formView = new UserRegistration(dataView);
			break;
	}

	formView.initialize();

	$(formView.node).bind(this.USER_REGISTERED, { context:this },function(e){
		e.data.context.getFormView(e.data.context.USER_REGISTERED);
	});

	$(formView.node).bind(this.USER_REGISTRATION, { context:this },function(e){
		e.data.context.getFormView(e.data.context.USER_REGISTRATION);
	});
}

FormFiles.prototype.onClosePopup = function() {
	Popup.prototype.onClosePopup.call(this);
	$(this.node).animate({
		left:$(window).width(),
		opacity:0
	},300,function(){
		utils.removeOverlay();
		$(this).remove();
	});
}