var utils = {
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
	}
}