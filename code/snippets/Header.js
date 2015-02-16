function Header(config) {
	this.config = config;
	this.container = this.config.container;
	this.pathSnippet = "snippets/header.html";
}

Header.prototype.constructor = Header;

Header.prototype.initialize = function(){
	var snippet = new Snippet( { "path" : this.pathSnippet, "data" : [] });
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);

	$.each($(this.node).find(".item-main-nav"),function(){
		$(this).css( { "top" : -($(this).height()) - 150 } );
	});

	this.animateItems();
	this.addHandlers();
}

Header.prototype.addHandlers = function() {
	$(this.node).find(".item-main-nav").click( {context:this},this.getSection );
}

Header.prototype.getSection = function(e){
	$(document).trigger( { type:Globals.GET_SECTION,dataSection:Utils.getSection($(this).data("section")) });
}

Header.prototype.animateItems = function() {
	var speed = 600;
	var delay = 100;
	var top = -80;
	$(this.node).find(".item-main-nav.main-logo").delay(delay).animate( { 
		top:top
	},{
		duration: speed,
  		easing: "swing"
	});

	$(this.node).find(".item-main-nav.btn-inicio").delay(delay * 3).animate( { 
		top:top
	},{
		duration: speed,
  		easing: "swing"
	});

	$(this.node).find(".item-main-nav.btn-productos").delay(delay * 4).animate( { 
		top:top
	},{
		duration: speed,
  		easing: "swing"
	});

	$(this.node).find(".item-main-nav.btn-docentes").delay(delay * 2).animate( { 
		top:top
	},{
		duration: speed,
  		easing: "swing"
	});

	$(this.node).find(".item-main-nav.btn-contacto").delay(delay * 5).animate( { 
		top:top
	},{
		duration: speed,
  		easing: "swing"
	});
}


