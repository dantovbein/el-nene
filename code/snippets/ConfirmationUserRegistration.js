function ConfirmationUserRegistration(config){
	ConfirmationUser.call(this,config);
	this.pathSnippet = "snippets/confirmation-user-registration.html";
}

inheritPrototype(ConfirmationUserRegistration,ConfirmationUser);

ConfirmationUserRegistration.prototype.constructor = ConfirmationUserRegistration;

ConfirmationUserRegistration.prototype.initialize = function(){
	ConfirmationUser.prototype.initialize.call(this);
	$(this.node).find(".counter").html(Globals.TIME_AFTER_UPLOAD_FILE);
	this.initTimer();
}

ConfirmationUserRegistration.prototype.showTime = function() {
	$(this.node).find(".counter").html(Globals.TIME_AFTER_UPLOAD_FILE - this.currentTime);
}