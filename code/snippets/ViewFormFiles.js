function ViewFormFiles(config){
	this.config = config;
	this.container = this.config.container;
	this.containerConfirmationFormButton = this.config.containerConfirmationFormButton;
}

ViewFormFiles.prototype.constructor = ViewFormFiles;

ViewFormFiles.prototype.initialize = function(){
	var snippet = new Snippet( { path : this.pathSnippet , data : (this.data != undefined) ? this.data : [] } );
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);	
}

ViewFormFiles.prototype.addHandlers = function() {}

ViewFormFiles.prototype.addConfirmationFormButton = function(dataConfirmationButton) {
	dataConfirmationButton.container = this.containerConfirmationFormButton;
	this.buttonConfirmationForm = new ButtonConfirmationForm(dataConfirmationButton);
	this.buttonConfirmationForm.initialize();

	$(this.buttonConfirmationForm.node).bind(Globals.ON_CONFIRM_FORM, { context:this }, this.onConfirmForm );
}

ViewFormFiles.prototype.onConfirmForm = function(e) {
	e.preventDefault();
}

ViewFormFiles.prototype.validateForm = function() {}

ViewFormFiles.prototype.showError = function(error){
	$(this.node).trigger({ type:Globals.SHOW_ERROR, dataError:error });
}

ViewFormFiles.prototype.checkEmailRegistered = function(userEmail) {
	var emailRegistered;
	$.ajax({
		async : false,
		type : "POST",
		data : { userEmail:userEmail },
		url : "service/manager/checkEmailRegistered.php",
		success : function(r) {
			var result = JSON.parse(r); 
			emailRegistered = (result.length == 0) ? false : true ;
		},
		error : function(error) {
			debugger;
		}
	});
	return emailRegistered;
}

ViewFormFiles.prototype.destroy = function() {
	if(this.buttonConfirmationForm) {
		this.buttonConfirmationForm.destroy();
	}
}

