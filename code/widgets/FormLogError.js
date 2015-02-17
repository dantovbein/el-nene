function FormLogError(config){
	this.config = config;
	this.container = this.config.container;
	this.pathSnippet = "widgets/form-log-error.html";
	this.dataSnippet = [ this.config.error ];
	this.currentTime = 0;
}

FormLogError.prototype.constructor = FormLogError;

FormLogError.prototype.initialize = function(){
	var snippet = new Snippet( { path : this.pathSnippet , data : (this.dataSnippet != undefined) ? this.dataSnippet : [] } );
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);

	$(this.node).css({
		opacity:0,
		top:this.config.position.top,
		left:this.config.position.left
	});

	$(this.node).animate({
		opacity:1
	},250);

	this.initTimer();
}

FormLogError.prototype.initTimer = function() {
	var delay = 1000 * (Globals.TIME_TO_SHOW_FORM_ERROR / Globals.TIME_TO_SHOW_FORM_ERROR);
   	var timer = setTimeout(this.onCompleteTimer,delay,{context:this});
   
}

FormLogError.prototype.onCompleteTimer = function(data) {
	data.context.currentTime++;
	if(data.context.currentTime == Globals.TIME_TO_SHOW_FORM_ERROR){
		$(data.context.node).animate({
			opacity:0
		},200,function(){
			$(this).remove();
		});
	}else {		
		data.context.initTimer();
	}
}

FormLogError.prototype.showTime = function() { }

FormLogError.prototype.destroy = function() { }

