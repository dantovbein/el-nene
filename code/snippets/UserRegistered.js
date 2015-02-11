function UserRegistered(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/user-registered.html";
}

inheritPrototype(UserRegistered,ViewFormFiles);

UserRegistered.prototype.constructor = UserRegistered;

UserRegistered.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	this.addHandlers();
}

UserRegistered.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
}