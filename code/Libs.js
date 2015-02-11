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
				"css/gloria-hallelujah.css",
				"css/blurmediumregular.css",
				"css/form-files.css",
				"css/header.css",
				"css/home.css",
				"css/profesors.css",
				"css/init-download-file.css",
				"css/user-registered.css",
				"css/user-registration.css",
				"code/monkeyman/core/oop.js",
				"code/monkeyman/core/Snippet.js",
				"code/monkeyman/core/utilities.js",
				"code/monkeyman/ui/preloader/src/Preloader.js",
				"code/monkeyman/ui/preloader/css/Preloader.css",
				"code/monkeyman/core/snippets/GenericSnippet.js",
				"code/monkeyman/core/snippets/Popup.js",
				"code/monkeyman/core/interfaces/View.js",
				"code/utils.js",
				"code/snippets/Header.js",
				"code/snippets/FormFiles.js",
				"code/snippets/ViewFormFiles.js",
				"code/snippets/InitialDownloadFile.js",
				"code/snippets/UserRegistered.js",
				"code/snippets/UserRegistration.js",
				"code/views/Main.js",
				"code/views/Home.js",
				"code/views/Products.js",
				"code/views/Contact.js",
				"code/views/Profesors.js"			
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