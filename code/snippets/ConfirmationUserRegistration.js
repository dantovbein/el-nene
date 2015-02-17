function ConfirmationUserRegistration(config){
	ConfirmationUser.call(this,config);
	this.pathSnippet = "snippets/confirmation-user-registration.html";
}

inheritPrototype(ConfirmationUserRegistration,ConfirmationUser);

ConfirmationUserRegistration.prototype.constructor = ConfirmationUserRegistration;

ConfirmationUserRegistration.prototype.initialize = function(){
	ConfirmationUser.prototype.initialize.call(this);
	Utilities.setHeight($(this.node).find(".wrapper-download-file-form"));
	this.initTimer();
}