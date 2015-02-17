function ConfirmationUser(config){
	this.config = config;
	this.container = this.config.container;
	this.currentTime = 0;
}

ConfirmationUser.prototype.constructor = ConfirmationUser;

ConfirmationUser.prototype.initialize = function(){
	var snippet = new Snippet( { path : this.pathSnippet , data : (this.data != undefined) ? this.data : [] } );
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);	
}

ConfirmationUser.prototype.initTimer = function() {
	var delay = 1000 * (Globals.TIME_USER_CONFIRMATION_VIEW / Globals.TIME_USER_CONFIRMATION_VIEW);
   	var timer = setTimeout(this.onCompleteTimer,delay,{context:this});
   
}

ConfirmationUser.prototype.onCompleteTimer = function(data) {
	data.context.currentTime++;
	data.context.showTime();
	if(data.context.currentTime == Globals.TIME_USER_CONFIRMATION_VIEW){
		$(data.context.node).trigger({ type:Globals.ON_CONFIRMATION_FILE });
	}else {		
		data.context.initTimer();
	}
}

ConfirmationUser.prototype.showTime = function(){}

ConfirmationUser.prototype.destroy = function() {
	//$(this.containerConfirmationFormButton).empty();
}