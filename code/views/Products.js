function Products(config) {
	View.call(this,config);
	this.pathSnippet = "views/products.html";
}

inheritPrototype(Products,View);

Products.prototype.constructor = Products;

Products.prototype.initialize = function() {
	View.prototype.initialize.call(this);
	this.addHandlers();
}

Products.prototype.addHandlers = function(){
	$(this.node).find(".product").click({ context:this }, this.getDataProduct );
}

Products.prototype.getDataProduct = function(e){
	e.data.context.showDataProduct(e.data.context.dataProduct = Utils.getDataProduct($(this).data("product")));
	console.log(e.data.context.dataProduct);
}

Products.prototype.showDataProduct = function(dataProduct){
	Utils.getOverlay();
	var productInfo = new ProductInfo({ container:$("body"),dataProduct:dataProduct });
	productInfo.initialize();
}