function UserRegistered(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/user-registered.html";
}

inheritPrototype(UserRegistered,ViewFormFiles);

UserRegistered.prototype.constructor = UserRegistered;

UserRegistered.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	Utilities.setHeight($(this.node).find(".wrapper-download-file-form"));
	this.addConfirmationFormButton({ dataAction : Globals.USER_REGISTERED,textButton : "Comprobar" });
	this.addHandlers();
}

UserRegistered.prototype.onConfirmForm = function(e) {
	ViewFormFiles.prototype.onConfirmForm.call(this,e);
	e.data.context.validateForm();
}

UserRegistered.prototype.validateForm = function() {
	ViewFormFiles.prototype.validateForm.call(this);
	var userEmail = $(this.node).find("input#user-email").val();

	var nodeEmail = $(this.node).find("input#user-email");
	var userEmail = nodeEmail.val();
	
	if(!Utilities.validateEmail(userEmail)){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_EMAIL, node:nodeEmail });
		return false;
	} else if(!this.checkEmailRegistered(userEmail)) {
		this.showError({ error:Globals.MESSAGE_FORM_NOT_AVAILABLE_USER, node:nodeEmail });
		return false;
	} else {
		$(this.node).trigger({ type:Globals.ON_CONFIRMATION_USER_REGISTERED });
		$(document).trigger({ type:Globals.USER_LOG_IN });
	}
}