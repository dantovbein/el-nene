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

ViewFormFiles.prototype.showError = function(d){
	//$(this.node).trigger({ type:Globals.SHOW_ERROR, dataError:error });
	var gapY = ($(d.node).attr("id")=="user-email") ? 12 : 0;
	var gapX = 30;
	var top = $(d.node).position().top + gapY;
	var left = $(d.node).position().left + $(d.node).width() - gapX;
	var formLogError = new FormLogError({ container:$(this.node).find(".wrapper-form-log-error"),error:d.error,position:{ top:top, left:left } });
	formLogError.initialize();
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
			Utils.getMain().userData = result[0];
			emailRegistered = (result.length == 0) ? false : true ;
		},
		error : function(error) {
			debugger;
		}
	});
	return emailRegistered;
}

ViewFormFiles.prototype.destroy = function() {
	if(this.buttonConfirmationForm != undefined)
		this.buttonConfirmationForm.destroy();
}

