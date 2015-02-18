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
		$("body").append('<div class="overlay"></div>');
		$(".overlay").css({
			opacity:0,
			width : $(document).width(),
			height : $(document).height()
		});
		$(".overlay").animate({
			opacity:1
		},300)
	},
	removeOverlay:function(){
		$(".overlay").animate({
			opacity:0
		},300,function(){
			$(this).remove();
		})
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