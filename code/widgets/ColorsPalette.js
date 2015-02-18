function ColorsPalette(config){
	GenericWidget.call(this,config);
	this.pathSnippet = "widgets/colors-palette.html";
}

inheritPrototype(ColorsPalette,GenericWidget);

ColorsPalette.prototype.constructor = ColorsPalette;