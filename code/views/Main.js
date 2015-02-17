function Main(config){
	View.call(this,config);
	this.pathSnippet = "views/main.html";
	this.userLogIn = false;
	this.userData = {};
}

inheritPrototype(Main,View);

Main.prototype.constructor = Main;

Main.prototype.initialize = function(){
	View.prototype.initialize.call(this);
	Utils.setMain(this);
	this.getHeader();
	this.showSection("home");
	this.addListeners();
}

Main.prototype.addListeners = function() {
	$(document).bind(Globals.GET_SECTION,{ context:this },function(e){
		e.preventDefault();
		e.data.context.showSection(e.dataSection);
	});

	$(document).bind(Globals.USER_LOG_IN,{ context:this },function(e){
		e.preventDefault();
		e.data.context.userLogIn = true;
	});

	$(document).bind(Globals.CLOSE_POPUP,{ context:this },function(e){
		e.preventDefault();
		$(".popup").animate({
				left:$(window).width(),
				opacity:0
			},300,function(){
				$(".popup").remove();
				Utils.removeOverlay();
			});
		});
}

Main.prototype.showSection = function(section) {
	/*if($(this.node).find("#content .view").length >= 1){
		$(this.node).find("#content").animate({
			opacity:0
		},500,function(){
			$(this).find(".view").remove();
			$(this).animate( {
				opacity : 1
			},300);
		});
	}*/
	$(this.node).find("#content .view").remove();
	var section;
	switch(section) {
		case "home":
			section = this.getHome();
			break;
		case "products":
			section = this.getProducts();
			break;
		case "profesors":
			section = this.getProfesors();
			break;
		case "contact":
			section = this.getContact();
			break;
	}
	section.initialize();
	
	/*$(this.node).find("#content").animate( {
		opacity : 1
	},300);*/
}

Main.prototype.getHeader = function(){
	var header = new Header( { container : $(this.node).find("#wrapper-main-header") } );
	header.initialize();
}

Main.prototype.getHome = function(){
	return new Home( { container : $(this.node).find("#content") } );
}

Main.prototype.getProducts = function(){
	return new Products( { container : $(this.node).find("#content") } );
}

Main.prototype.getProfesors = function(){
	return new Profesors( { container : $(this.node).find("#content") } );
}

Main.prototype.getContact = function(){
	return new Contact( { container : $(this.node).find("#content") } );
}

Main.prototype.getPreloader = function() {
 	this.preloader = new Preloader( { container : $("body") } );
 	this.preloader.initialize();
}

Main.prototype.removePreloader = function() {
	this.preloader.destroy();
}