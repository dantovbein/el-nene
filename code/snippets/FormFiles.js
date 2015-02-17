function FormFiles(config){
	Popup.call(this,config);
	this.pathSnippet = "snippets/form-files.html";
	this.defaultFormView = Globals.INITIAL_DOWNLOAD_FILE;

	this.fileId = this.config.fileId;
	this.dataSnippet = [ this.fileId ];
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
	var containerConfirmationFormButton = $(this.node).find(".wrapper-btn-confirmation-form");

	if(this.formView != undefined)
		this.formView.destroy();

	this.formView;
	var dataView = { container:container,containerConfirmationFormButton:containerConfirmationFormButton  };
	
	if(Utils.getMain().userLogIn && view==Globals.INITIAL_DOWNLOAD_FILE)
		view = Globals.ON_CONFIRMATION_FILE;

	switch(view){
		case Globals.INITIAL_DOWNLOAD_FILE:
			this.formView = new InitialDownloadFile(dataView);
			break;
		case Globals.USER_REGISTERED:
			this.formView = new UserRegistered(dataView);
			break;
		case Globals.USER_REGISTRATION:
			this.formView = new UserRegistration(dataView);
			break;
		case Globals.ON_CONFIRMATION_FILE:
			dataView.fileId = this.fileId;
			this.formView = new ConfirmationFile(dataView);
			break;
		case Globals.ON_CONFIRMATION_USER_REGISTRATION:
			this.formView = new ConfirmationUserRegistration(dataView);
			break;
		case Globals.THANKS_FOR_THE_DOWNLOAD:
			this.formView = new ThanksForTheDownload(dataView);
			break;
	}

	this.formView.initialize();

	$(this.formView.node).bind(Globals.USER_REGISTERED, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.USER_REGISTERED);
	});

	$(this.formView.node).bind(Globals.USER_REGISTRATION, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.USER_REGISTRATION);
	});

	$(this.formView.node).bind(Globals.ON_CONFIRMATION_FILE, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.ON_CONFIRMATION_FILE);
	});

	$(this.formView.node).bind(Globals.ON_CONFIRMATION_USER_REGISTRATION, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.ON_CONFIRMATION_USER_REGISTRATION);
	});

	$(this.formView.node).bind(Globals.ON_CONFIRMATION_USER_REGISTERED, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.ON_CONFIRMATION_FILE);
	});

	$(this.formView.node).bind(Globals.ON_CONFIRM_DOWNLOAD, { context:this },function(e){
		e.preventDefault();
		e.data.context.getFormView(Globals.THANKS_FOR_THE_DOWNLOAD);
	});

	//$(this.formView.node).bind(Globals.SHOW_ERROR, { context:this }, this.showError );	
}

FormFiles.prototype.onClosePopup = function() {
	Popup.prototype.onClosePopup.call(this);
	$(document).trigger({ type:Globals.CLOSE_POPUP })
}

//FormFiles.prototype.showError = function(e) {
	//var formLogError = new FormLogError({ container:$(e.data.context.node).find(".wrapper-form-log-error"),dataError:e.dataError });
	//formLogError.initialize();
//}

FormFiles.prototype.destroy = function(){
	$(this).remove();
}

