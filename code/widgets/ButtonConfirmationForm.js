function ButtonConfirmationForm(config){
	GenericWidget.call(this,config);
	this.textButton = utilities.defaultTo(this.config.textButton,"Sin descripcion");
	this.dataAction = this.config.dataAction;
	this.pathSnippet = "widgets/confirmation-form-button.html";
}

inheritPrototype(ButtonConfirmationForm,GenericWidget);

ButtonConfirmationForm.prototype.constructor = ButtonConfirmationForm;

ButtonConfirmationForm.prototype.initialize = function() {
	this.dataSnippet = [this.dataAction,this.textButton];
	GenericWidget.prototype.initialize.call(this);
	$(this.container).animate({
		opacity:1,
		top:373
	},500);

	$(this.node).find(".btn-desc").click( { context : this },function(e) {
		$(e.data.context.node).trigger({ type : Globals.ON_CONFIRM_FORM });
	});
}

ButtonConfirmationForm.prototype.destroy = function() {
	GenericWidget.prototype.destroy.call(this);
	$(this).remove();
	/*$(this.container).animate({
		opacity:0,
		top:280
	},300,function(){
		$(this).remove();
	});*/
}

ButtonConfirmationForm.prototype.onDownload = function(d){
	$(this.node).find(".btn-desc").attr({
		"href" : d.filePath + d.fileName,
		"download" : d.fileName
	});
}


