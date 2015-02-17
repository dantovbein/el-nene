function ThanksForTheDownload(config){
	this.config = config;
	this.container = this.config.container;
	this.currentTime = 0;
	this.pathSnippet = "snippets/thanks-for-the-download.html";
}

ThanksForTheDownload.prototype.constructor = ThanksForTheDownload;

ThanksForTheDownload.prototype.initialize = function(){
	var snippet = new Snippet( { path : this.pathSnippet , data : (this.data != undefined) ? this.data : [] } );
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);
	Utilities.setHeight($(this.node).find(".wrapper-download-file-form"));
	this.initTimer();
}

ThanksForTheDownload.prototype.initTimer = function() {
	var delay = 1000 * (Globals.TIME_THANKS_FOR_THE_DOWNLOAD / Globals.TIME_THANKS_FOR_THE_DOWNLOAD);
   	var timer = setTimeout(this.onCompleteTimer,delay,{context:this});
}

ThanksForTheDownload.prototype.onCompleteTimer = function(data) {
	data.context.currentTime++;
	if(data.context.currentTime == Globals.TIME_THANKS_FOR_THE_DOWNLOAD){
		$(data.context.node).trigger({ type:Globals.CLOSE_POPUP });
	}else {		
		data.context.initTimer();
	}
}