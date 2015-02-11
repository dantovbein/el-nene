function Profesors(config) {
	View.call(this,config);
	this.pathSnippet = "views/profesors.html";
}

inheritPrototype(Profesors,View);

Profesors.prototype.constructor = Profesors;

Profesors.prototype.initialize = function() {
	View.prototype.initialize.call(this);
	this.addHandlers();
}

Profesors.prototype.addHandlers = function(){
	View.prototype.addHandlers.call(this);
	$(this.node).find(".wrapper-pdf-files").find(".icon-pdf-file").click( { context:this }, this.getFile );
}

Profesors.prototype.getFile = function(){
	utils.getOverlay();
	var formFiles = new FormFiles({ container:$("body") });
	formFiles.initialize();
}