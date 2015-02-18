this.main;
var Utils = {
	setMain:function(main){
		this.main = main;
	},
	getMain:function(){
		return this.main;
	},
	getSection:function(id){
		switch(id){
			case 1:
				return "home";
				break;
			case 2:
				return "products";
				break;
			case 3:
				return "profesors";
				break;
			case 4:
				return "contact";
				break;
		}
	},
	getOverlay:function(){
		/*$("body").append('<div class="overlay"></div>');
		$(".overlay").css({
			opacity:0,
			width : $(document).width(),
			height : $(document).height()
		});
		$(".overlay").animate({
			opacity:1
		},300);*/
		var overlay = document.createElement("div");
		overlay.setAttribute("id", "overlay");
    	document.body.appendChild(overlay);
    	overlay.style.width = document.body.scrollWidth + "px";
		overlay.style.height = document.body.scrollHeight + "px";
	},
	removeOverlay:function(){
		var overlay = document.getElementById("overlay");
		overlay.remove();
		/*$(".overlay").animate({
			opacity:0
		},300,function(){
			$(this).remove();
		}))*/
	},
	getPreloader : function(value){
		this.getOverlay();
		
		var preloader = document.createElement("div");
		preloader.setAttribute("id", "preloader");

		var preloaderIcon = document.createElement("div");
		preloaderIcon.className = "preloader-icon";
		preloader.appendChild(preloaderIcon);

		var preloaderText = document.createElement("span");
		preloaderText.className = "preloader-text";
		preloaderText.innerHTML = (value != undefined) ? value : "Cargando";
		preloader.appendChild(preloaderText);
		
		document.body.appendChild(preloader);
		preloader.style.top = (window.innerHeight / 2 - preloader.offsetHeight / 2) + "px";
	},
	removePreloader : function(){
		this.removeOverlay();
		var preloader = document.getElementById("preloader");
		preloader.remove();
	},
	getDataProduct : function(productId){
		this.dataProduct = {};
		$.ajax({
			context : this,
			async : false,
			type : "POST",
			data : { productId:productId },
			url : "service/manager/getProduct.php",
			success : function(r){
				this.dataProduct = JSON.parse(r)[0];
			},
			error : function(error){
				debugger;
			}
		});
		return this.dataProduct;
	},
	getProductColor : function(sectionId){
		var color;
		switch(parseFloat(sectionId)) {
			case 1:
				color = "rgba(51,153,204,1)";
				break;
			case 2:
				color = "rgba(236,163,18,1)";
				break;
			case 3:
				color = "rgba(222,48,32,1)";
				break;
			case 4:
				color = "rgba(76,204,51,1)";
				break;
			case 5:
				color = "rgba(57,57,57,1)";
				break;
			case 6:
				color = "rgba(13,144,70,1)";
				break;
			case 7:
				color = "rgba(208,95,29,1)";
				break;
			case 8:
				color = "rgba(195,155,69,1)"; 
				break;
			case 9:
				color = "rgba(250,166,27,1)"; 
				break;

		}
		return color;
	}
}