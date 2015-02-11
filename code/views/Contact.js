function Contact(config) {
	View.call(this,config);
	this.pathSnippet = "views/contact.html";
}

inheritPrototype(Contact,View);

Contact.prototype.constructor = Contact;

Contact.prototype.initialize = function() {
	View.prototype.initialize.call(this);
}