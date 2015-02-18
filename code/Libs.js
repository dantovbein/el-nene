function Libs(_lib_) {
	var self = this;
	this.lib = _lib_;
	
	if(window.jQuery == undefined) {
		console.log("Jquery is not loaded. It's mandatory to load JQuery");
	}else{
		this.loadFiles(this.getFiles(this.lib));
	}
};

Libs.prototype.constructor = Libs;

Libs.prototype.getFiles = function(_lib_) {
	var self = this;
	this.libraries = new Array(
		{
			"name"	: "web",
			"libs"	: [
				"code/monkeyman/css/utils.css",
				"css/base.css",
				"css/gloria-hallelujah.css",
				"css/blurmediumregular.css",
				"css/view.css",
				"css/download-file-form.css",
				"css/generic-forms.css",
				"css/form-files.css",
				"css/header.css",
				"css/home.css",
				"css/profesors.css",
				"css/contact.css",
				"css/init-download-file.css",
				"css/user-registered.css",
				"css/user-registration.css",
				"css/confirmation-file.css",
				"css/confirmation-user-registration.css",
				"css/form-log-error.css",
				"css/product-info.css",
				"css/products.css",
				"code/monkeyman/core/oop.js",
				"code/monkeyman/core/Snippet.js",
				"code/monkeyman/core/Utilities.js",
				//"code/monkeyman/ui/preloader/src/Preloader.js",
				//"code/monkeyman/ui/preloader/css/Preloader.css",
				"code/monkeyman/core/widgets/GenericWidget.js",
				"code/monkeyman/core/snippets/GenericSnippet.js",
				"code/monkeyman/core/snippets/Popup.js",
				"code/monkeyman/core/interfaces/View.js",
				"code/Globals.js",
				"code/Utils.js",
				"code/widgets/ButtonConfirmationForm.js",
				"code/widgets/FormLogError.js",
				"code/snippets/Header.js",				
				"code/snippets/FormFiles.js",
				"code/snippets/ViewFormFiles.js",
				"code/snippets/InitialDownloadFile.js",
				"code/snippets/UserRegistered.js",
				"code/snippets/UserRegistration.js",
				"code/snippets/ConfirmationFile.js",
				"code/snippets/ConfirmationUser.js",
				"code/snippets/ConfirmationUserRegistration.js",
				"code/snippets/ThanksForTheDownload.js",
				"code/snippets/ProductInfo.js",
				"code/views/Home.js",
				"code/views/Products.js",
				"code/views/Contact.js",
				"code/views/Profesors.js",
				"code/views/Main.js"
			]
		}
	);
	var _libs_ = new Array();
	this.libraries.forEach(function(d){
		if(d.name == _lib_)
			_libs_ = d.libs;
	});
	return _libs_;
};

Libs.prototype.loadFiles = function(files) {
	var index,extension,file;
	files.forEach(function(f){
		index = f.lastIndexOf(".",f.length);
		extension = f.slice(index + 1,f.length);
		switch(extension)
		{
			case "css":
				$.ajax({
					async : false,
					url : f,
					success : function(result) {
						$("<style></style>").appendTo("head").html(result);
					},
					error : function(error) {
						console.log("No se pudo cargar " + f);
					}
				});
			break;
			case "js":
				$.ajax({
					async : false,
					url : f,
					dataType : "script",
					success : function(result) {
						console.log("Se cargo: " + f);
					},
					error : function(error) {
						console.log("No se pudo cargar " + f);
					}
				});

			break;
		}
	});
};