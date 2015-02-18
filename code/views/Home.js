function Home(config) {
	View.call(this,config);
	this.pathSnippet = "views/home.html";
}

inheritPrototype(Home,View);

Home.prototype.constructor = Home;

Home.prototype.initialize = function() {
	View.prototype.initialize.call(this);
	this.addHandlers();
}

Home.prototype.addHandlers = function(){
	$(this.node).find(".product").click({ context:this }, this.getDataProduct );
}

Home.prototype.getDataProduct = function(e){
	e.data.context.showDataProduct(e.data.context.dataProduct = Utils.getDataProduct($(this).data("product")));
	console.log(e.data.context.dataProduct);
}

Home.prototype.showDataProduct = function(dataProduct){
	Utils.getOverlay();
	var productInfo = new ProductInfo({ container:$("body"),dataProduct:dataProduct });
	productInfo.initialize();
}