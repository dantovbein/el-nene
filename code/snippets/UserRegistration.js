function UserRegistration(config){
	ViewFormFiles.call(this,config);
	this.pathSnippet = "snippets/user-registration.html";
}

inheritPrototype(UserRegistration,ViewFormFiles);

UserRegistration.prototype.constructor = UserRegistration;

UserRegistration.prototype.initialize = function(){
	ViewFormFiles.prototype.initialize.call(this);
	Utilities.setHeight($(this.node).find(".wrapper-download-file-form"));
	this.addConfirmationFormButton({ dataAction : Globals.USER_REGISTRATION,textButton : "Confirmar" });
	this.addHandlers();
}

UserRegistration.prototype.onConfirmForm = function(e) {
	ViewFormFiles.prototype.onConfirmForm.call(this,e);
	e.data.context.validateForm();
}

UserRegistration.prototype.validateForm = function() {
	ViewFormFiles.prototype.validateForm.call(this);

	var nodeEmail = $(this.node).find("input#user-email");
	var nodeName = $(this.node).find("input#user-name");
	var nodeLastName = $(this.node).find("input#user-last-name");	
	var nodeSchool = $(this.node).find("input#user-school");
	var nodeAddress = $(this.node).find("input#user-address");
	var nodeCity = $(this.node).find("input#user-city");
	var nodeSubject = $(this.node).find("input#user-subject");

	var userEmail = nodeEmail.val();
	var userName = nodeName.val();
	var userLastName = nodeLastName.val();	
	var userSchool = nodeSchool.val();
	var userAddress = nodeAddress.val();
	var userCity = nodeCity.val();
	var userSubject = nodeSubject.val();
	
	if(!Utilities.validateEmail(userEmail)){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_EMAIL, node:nodeEmail });
		return false;
	} else if(this.checkEmailRegistered(userEmail)) {
		this.showError({ error:Globals.MESSAGE_FORM_NOT_AVAILABLE_EMAIL, node:nodeEmail });
		return false;
	} else if(userName == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_NAME, node:nodeName });
		return false;
	} else if(userLastName == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_LAST_NAME, node:nodeLastName });
		return false;
	} else if(userSchool == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_SCHOOL, node:nodeSchool });
		return false;
	} else if(userAddress == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_ADDRESS, node:nodeAddress });
		return false;
	} else if(userCity == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_CITY, node:nodeCity });
		return false;
	} else if(userSubject == ""){
		this.showError({ error:Globals.MESSAGE_FORM_INVALID_SUBJECT, node:nodeSubject });
		return false;
	} else {
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
		success : function(r) {
			var result = JSON.parse(r); 
			Utils.getMain().userData = result[0];

			this.destroy();
			
			$(this.node).trigger({ type:Globals.ON_CONFIRMATION_USER_REGISTRATION });
			$(document).trigger({ type:Globals.USER_LOG_IN });
		},
		error : function(error) {
			debugger;
		}
	});	
}

