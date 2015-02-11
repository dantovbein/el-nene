function FormFiles(config){
	Popup.call(this,config);
	this.pathSnippet = "snippets/form-files.html";
}

inheritPrototype(FormFiles,Popup);

FormFiles.prototype.constructor = FormFiles;

FormFiles.prototype.initialize = function(){
	Popup.prototype.initialize.call(this);
	$(this.node).css({
		left:-$(this.node).width(),
		top:$(window).height() / 2 - $(this.node).height() / 2,
		opacity:0
	});

	$(this.node).animate({
		left:0,
		opacity:1
	},400);
	this.addHandlers();
}

FormFiles.prototype.addHandlers = function() {
	Popup.prototype.addHandlers.call(this);
	$(this.node).find(".btn-close").click( { context:this }, function(e){
		e.data.context.onClosePopup();
	});
}

FormFiles.prototype.onClosePopup = function() {
	Popup.prototype.onClosePopup.call(this);
	$(this.node).animate({
		left:$(window).width(),
		opacity:0
	},300,function(){
		utils.removeOverlay();
		$(this).remove();
	});
}