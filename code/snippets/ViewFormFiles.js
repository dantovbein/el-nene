function ViewFormFiles(config){
	this.config = config;
	this.container = this.config.container;
}

ViewFormFiles.prototype.constructor = ViewFormFiles;

ViewFormFiles.prototype.initialize = function(){
	var snippet = new Snippet( { path : this.pathSnippet , data : (this.data != undefined) ? this.data : [] } );
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);	
}

ViewFormFiles.prototype.addHandlers = function() {
	
}