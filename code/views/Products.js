function Products(config) {
	View.call(this,config);
	this.pathSnippet = "views/products.html";
}

inheritPrototype(Products,View);

Products.prototype.constructor = Products;

Products.prototype.initialize = function() {
	View.prototype.initialize.call(this);
}