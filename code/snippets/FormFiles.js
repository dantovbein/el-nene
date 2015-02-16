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
		//top:$(window).height() / 2 - $(this.node).height() / 2,
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

	var formView;
	var dataView = { container:container,containerConfirmationFormButton:containerConfirmationFormButton  };

	if(Utils.getMain().userLogIn)
		view = Globals.ON_CONFIRMATION_FILE;		

	switch(view){
		case Globals.INITIAL_DOWNLOAD_FILE:
			formView = new InitialDownloadFile(dataView);
			break;
		case Globals.USER_REGISTERED:
			formView = new UserRegistered(dataView);
			break;
		case Globals.USER_REGISTRATION:
			formView = new UserRegistration(dataView);
			break;
		case Globals.ON_CONFIRMATION_FILE:
			dataView.fileId = this.fileId;
			formView = new ConfirmationFile(dataView);
			break;
		case Globals.ON_CONFIRMATION_USER_REGISTRATION:
			formView = new ConfirmationUserRegistration(dataView);
			break;
	}

	formView.initialize();

	$(formView.node).bind(Globals.USER_REGISTERED, { context:this },function(e){
		e.data.context.getFormView(Globals.USER_REGISTERED);
	});

	$(formView.node).bind(Globals.USER_REGISTRATION, { context:this },function(e){
		e.data.context.getFormView(Globals.USER_REGISTRATION);
	});

	$(formView.node).bind(Globals.ON_CONFIRMATION_FILE, { context:this },function(e){
		e.data.context.getFormView(Globals.ON_CONFIRMATION_FILE);
	});

	$(formView.node).bind(Globals.ON_CONFIRMATION_USER_REGISTRATION, { context:this },function(e){
		e.data.context.getFormView(Globals.ON_CONFIRMATION_USER_REGISTRATION);
	});

	$(formView.node).bind(Globals.ON_CONFIRMATION_USER_REGISTERED, { context:this },function(e){
		e.data.context.getFormView(Globals.ON_CONFIRMATION_FILE);
	});

	$(formView.node).bind(Globals.SHOW_ERROR, { context:this }, this.showError );	
}

FormFiles.prototype.onClosePopup = function() {
	Popup.prototype.onClosePopup.call(this);
	$(this.node).animate({
		left:$(window).width(),
		opacity:0
	},300,function(){
		Utils.removeOverlay();
		$(this).remove();
	});
}

FormFiles.prototype.showError = function(e) {
	alert(e.dataError);
}

