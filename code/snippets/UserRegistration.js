function UserRegistration(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/user-registration.html";
}

inheritPrototype(UserRegistration,ViewFormFiles);

UserRegistration.prototype.constructor = UserRegistration;

UserRegistration.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	this.addHandlers();
}

UserRegistration.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
}