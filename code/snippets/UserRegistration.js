function UserRegistration(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/user-registration.html";
}

inheritPrototype(UserRegistration,ViewFormFiles);

UserRegistration.prototype.constructor = UserRegistration;

UserRegistration.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	this.addConfirmationFormButton({ dataAction : Globals.USER_REGISTRATION,textButton : "Confirmar" });
	this.addHandlers();
}

UserRegistration.prototype.onConfirmForm = function(e) {
	ViewFormFiles.prototype.onConfirmForm.call(this,e);
	e.data.context.validateForm();
}

UserRegistration.prototype.validateForm = function() {
	ViewFormFiles.prototype.validateForm.call(this);
	var userEmail = $(this.node).find("input#user-email").val();
	var userName = $(this.node).find("input#user-name").val();
	var userLastName = $(this.node).find("input#user-last-name").val();	
	var userSchool = $(this.node).find("input#user-school").val();
	var userAddress = $(this.node).find("input#user-address").val();
	var userCity = $(this.node).find("input#user-city").val();
	var userSubject = $(this.node).find("input#user-subject").val();
	
	if(!utilities.validateEmail(userEmail)){
		this.showError(Globals.MESSAGE_FORM_INVALID_EMAIL);
		return false;
	} else if(this.checkEmailRegistered(userEmail)) {
		this.showError(Globals.MESSAGE_FORM_NOT_AVAILABLE_EMAIL);
		return false;
	} /*else if(userName == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_NAME);
		return false;
	} else if(userLastName == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_LAST_NAME);
		return false;
	} else if(userSchool == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_SCHOOL);
		return false;
	} else if(userAddress == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_ADDRESS);
		return false;
	} else if(userCity == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_CITY);
		return false;
	} else if(userSubject == ""){
		this.showError(Globals.MESSAGE_FORM_INVALID_SUBJECT);
		return false;
	}*/ else {
		this.addUser({	userEmail : userEmail,
						userName : userName,
						userLastName : userLastName,
						userSchool : userSchool,
						userAddress : userAddress,
						userCity : userCity,
						userSubject : userSubject
					});
	}
}

UserRegistration.prototype.addUser = function(userData) {
	$.ajax({
		async : false,
		type : "POST",
		data : userData,
		url : "service/manager/addUser.php",
		context:this,
		success : function(result) {
			if(result==1){
				this.destroy();
				$(this.node).trigger({ type:Globals.ON_CONFIRMATION_USER_REGISTRATION });
				$(document).trigger({ type:Globals.USER_LOG_IN });
			}
		},
		error : function(error) {
			debugger;
		}
	});	
}

