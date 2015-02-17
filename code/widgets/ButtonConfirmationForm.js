function ButtonConfirmationForm(config){
	GenericWidget.call(this,config);
	this.textButton = Utilities.defaultTo(this.config.textButton,"Sin descripcion");
	this.dataAction = this.config.dataAction;
	this.pathSnippet = "widgets/confirmation-form-button.html";
}

inheritPrototype(ButtonConfirmationForm,GenericWidget);

ButtonConfirmationForm.prototype.constructor = ButtonConfirmationForm;

ButtonConfirmationForm.prototype.initialize = function() {
	this.dataSnippet = [this.dataAction,this.textButton];
	GenericWidget.prototype.initialize.call(this);
	$(this.container).delay(200).animate({
		opacity:1,
		top:365
	},500);

	$(this.node).find(".btn-desc").click( { context : this },function(e) {
		$(e.data.context.node).trigger({ type : Globals.ON_CONFIRM_FORM });
	});
}

ButtonConfirmationForm.prototype.destroy = function() {
	GenericWidget.prototype.destroy.call(this);
	$(this.container).css({
		opacity:0,
		top:280
	})
	$(this.container).empty();
	//$(this.container).animate({
	//	opacity:0,
	//	top:280
	//},100,function(){
	//	$(this).empty();
	//});
}

ButtonConfirmationForm.prototype.onDownload = function(d){
	$(this.node).find(".btn-desc").attr({
		"href" : d.filePath + d.fileName,
		"download" : d.fileName
	});

	$(this.node).find(".btn-desc").click( { context : this },function(e) {
		$(e.data.context.node).trigger({ type : Globals.ON_CONFIRM_DOWNLOAD });
	});
}


