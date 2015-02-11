function Home(config) {
	View.call(this,config);
	this.pathSnippet = "views/home.html";
}

inheritPrototype(Home,View);

Home.prototype.constructor = Home;

Home.prototype.initialize = function() {
	View.prototype.initialize.call(this);
}