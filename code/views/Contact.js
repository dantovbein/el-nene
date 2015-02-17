function Contact(config) {
	View.call(this,config);
	this.pathSnippet = "views/contact.html";
}

inheritPrototype(Contact,View);

Contact.prototype.constructor = Contact;

Contact.prototype.initialize = function() {
	View.prototype.initialize.call(this);
	this.addHandlers();
}

Contact.prototype.addHandlers = function() {
	$(this.node).find(".btn-send").click({ context:this },this.onConfirmForm );
}

Contact.prototype.onConfirmForm = function(e) {
	e.data.context.validateForm();
}

Contact.prototype.validateForm = function() {
	var nodeName = $(this.node).find("input#user-name");
	var nodeLastName = $(this.node).find("input#user-last-name");
	var nodeEmail = $(this.node).find("input#user-email");
	var nodeComment = $(this.node).find("#user-comment");

	var userEmail = nodeEmail.val();
	var userName = nodeName.val();
	var userLastName = nodeLastName.val();
	var userComment = nodeComment.val();
	
	if(userName == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_NAME, node:nodeName });
		return false;
	} else if(userLastName == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_LAST_NAME, node:nodeLastName });
		return false;
	} else if(!Utilities.validateEmail(userEmail)){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_EMAIL, node:nodeEmail });
		return false;
	} else if(userComment == ""){
		this.showError({ error:Globals.MESSAGE_COMMENT_EMPTY, node:nodeComment });
		return false;
	} else {
		this.sendEmail({	userEmail : userEmail,
							userName : userName,
							userLastName : userLastName,
							userComment : userComment
					});
	}
}

Contact.prototype.showError = function(d){
	var gapY = 0;
	var gapX = 30;
	var top = $(d.node).position().top + gapY;
	var left = $(d.node).position().left + $(d.node).width() - gapX;
	var formLogError = new FormLogError({ container:$(this.node).find(".wrapper-form-log-error"),error:d.error,position:{ top:top, left:left } });
	formLogError.initialize();
}

Contact.prototype.sendEmail = function(d) {
	$(this.node).find(".btn-send").animate({
		opacity:0
	},300,function(){
		$(this).css({ display:"none" });
	});

	$.ajax({
		context : this,
		async : false,
		type : "POST",
		url : "service/sendEmail.php",
		data : d,
		success : function(r) {
			this.onSendSuccesful();
		},
		error : function(error) {
			debugger;
		}
	});
}

Contact.prototype.onSendSuccesful = function(){
	this.resetForm();
	
	$(this.node).find(".thanks-message").css({
		display:"block"
	});
	$(this.node).find(".thanks-message").animate({
		opacity:1
	},250,function(){
		$(this).delay(2500).animate({
			opacity:0
		},250,function(){
			$(this).css({
				display : "none"
			})
		});
	});

	$(this.node).find(".wrapper-contact-form").animate({
		top:1200
	},600,function(){
		$(this).delay(3000).animate({
			top:0
		},300);
	});
}

Contact.prototype.resetForm = function() {
	$(this.node).find("input#user-name").val("");
	$(this.node).find("input#user-last-name").val("");
	$(this.node).find("input#user-email").val("");
	$(this.node).find("#user-comment").val("");
}


