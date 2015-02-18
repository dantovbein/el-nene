function ProductInfo(config){
	Popup.call(this,config);
	this.pathSnippet = "snippets/product-info.html";
	this.dataSnippet = [ this.config.dataProduct.productName,this.config.dataProduct.productDetails ];
	this.productId = this.config.dataProduct.productId;
}

inheritPrototype(ProductInfo,Popup);

ProductInfo.prototype.constructor = ProductInfo;

ProductInfo.prototype.initialize = function(){
	Popup.prototype.initialize.call(this);

	if(this.productId ==7 || this.productId == 10){
		var colorsPalette = new ColorsPalette({ container:$(this.node).find(".wrapper-extras") });
		colorsPalette.initialize();
	}

	var color = Utils.getProductColor(this.productId);

	$(this.node).find(".title-product-info").css({
		top : -$(this.node).find(".title-product-info").height() - 15,
		color : color
	});

	$(this.node).css({
		opacity : 0,
		backgroundColor : color,
		top : $(window).height() / 2 - $(this.node).height() / 2,
		left : 0 - $(this.node).width(),
	});

	$(this.node).delay(200).animate({
		left : $(window).width() / 2 - $(this.node).width() / 2 - 35,
		opacity:1
	});

	$(this.node).find(".btn-close").click( { context:this }, function(e){
		e.data.context.onClosePopup();
	});
}

ProductInfo.prototype.onClosePopup = function() {
	Popup.prototype.onClosePopup.call(this);
	$(document).trigger({ type:Globals.CLOSE_POPUP })
}

