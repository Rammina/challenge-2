// Checking SVG support

var svgSupport = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

if (!(svgSupport)) {

	let allSvg = document.getElementsByTagName("svg");

	for (let svg of allSvg) {
		svg.classList.add("no-display");
		svg.classList.add("hide-svg");
	}

	let allSvgFallback = document.querySelectorAll(".svg-fallback");

	for (let png of allSvgFallback) {
		png.classList.remove("no-display");
		png.classList.remove("hide-png");
	}



}

// document objects

// navigation bar objects

var navbar = {
	header: document.querySelector(".main-header"),
	title: document.querySelector("#nav__title"),
	menubutton: document.querySelector("#nav__menu"),
	menuitems: document.querySelector(".nav__items"),
	menuitem: document.querySelectorAll(".nav__item"),
	showMenu: function showMenu() {
		navbar.menuitems.classList.add("show")
		navbar.menubutton.setAttribute("aria-expanded", "true");
	},
	hideMenu: function hideMenu() {
		navbar.menuitems.classList.remove("show")
		navbar.menubutton.setAttribute("aria-expanded", "false");
	},
	menutouched: false
}

// Main objects


// Services section
var services = { 
	title: document.querySelector("#services")

};
// Product section object
var products = { 
	title: document.querySelector("#products"),
	items: document.querySelectorAll(".products__middle")
};

// about section
var about = {
	title: document.querySelector("#about")
}

// founders section
var founders = {
	title: document.querySelector("#founders"),
	svgs: document.querySelectorAll(".founders__svg"),
	links: document.querySelectorAll(".founders__logo-link")
}

// contact section
var contact = {
	container: document.querySelector(".contact-container"),
	nameInput: document.querySelector("#contact__name"),
	nameInputText: document.querySelector("#contact__name").value,
	emailInput: document.querySelector("#contact__email"),
	emailInputText: document.querySelector("#contact__email").value,
	phoneInput: document.querySelector("#contact__phone"),
	phoneInputText: document.querySelector("#contact__phone").value,
	messageInput: document.querySelector("#contact__message"),
	messageInputText: document.querySelector("#contact__message").value,
	nameError: document.querySelector("#name-error"),
	emailError: document.querySelector("#email-error"),
	phoneError: document.querySelector("#phone-error"),
	messageError: document.querySelector("#message-error"),
	emailClick: false,
	signUp: document.querySelector("#contact-submit"),
	signUpValid: false,
	// method

	// Functions that get rid of placeholders
	// The first one restores the placeholder if the default value is not changed
	fillField: function fillField(input, val) {
		if(input.value === ""){
				input.value = val;
			
		}
	},
	// The second one removes the placeholder when the input box is on focus
	clearField: function clearField(input, val) {
		if(input.value === val){
			input.value = "";
		}
	},
	validNameField: function validNameField(string) {
		let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
		let notValid = regex.test(string);
		if(notValid) {
			return false;
		}
		if(string.length > 100) {
			return false;
		}
		return true;
	},
	validPhoneNumber: function validPhoneNumber(string) {
		let digits = string.match(/\d/g);
		return ((digits) && (digits.length <= 15 && digits.length >= 4));
	},
	validMessage: function validMessage(string) {
		return (string.length <= 500);
	},
	// validateName
	validateName: function validateName() {

		if((contact.nameInput.value === "Your Name...") || (contact.nameInput.value === ""))  {
			contact.nameInput.classList.add("default");
			contact.nameInput.classList.remove("valid");
			contact.nameInput.classList.remove("invalid");
			contact.nameError.classList.remove("show");
		}
		else{
			contact.nameInput.classList.remove("default");
		

			if((!contact.validNameField(contact.nameInput.value)) && (contact.nameInput.value !== ""))  {
				contact.nameInput.classList.add("invalid");
				contact.nameError.classList.add("show");
				contact.nameInput.classList.remove("valid");
			}
			else if((contact.validNameField(contact.nameInput.value)) && (contact.nameInput.value !== ""))  {
				contact.nameInput.classList.add("valid");
				contact.nameInput.classList.remove("invalid");
				contact.nameError.classList.remove("show");
			}
		}
	},
	// validateEmail
	validateEmail: function validateEmail() {
		if (contact.emailInput.value === "Your Email...") {
			contact.emailInput.classList.add("default");
			contact.emailInput.classList.remove("invalid");
			contact.emailError.classList.remove("show");
			contact.emailInput.classList.remove("valid");
		}
		else {
			if (contact.emailInput.matches(':invalid')) {
				contact.emailInput.classList.add("invalid");
				contact.emailError.classList.add("show");
				contact.emailInput.classList.remove("valid");
				contact.emailInput.classList.remove("default");
				// console.log("invalid check");
			}
			else if ((contact.emailInput.matches(':valid')) && contact.emailInput.value !== "") {
				contact.emailInput.classList.add("valid");
				contact.emailInput.classList.remove("invalid");
				contact.emailError.classList.remove("show");
				contact.emailInput.classList.remove("default");

			}

			if(contact.emailInput.value === "") {
				contact.emailInput.classList.remove("default");
			}
		}
	},
	// validatePhoneNumber
	validatePhoneNumber: function validatePhoneNumber() {
			
		if((contact.phoneInput.value === "Your Phone Number...") || (contact.phoneInput.value === ""))  {
			contact.phoneInput.classList.add("default");
			contact.phoneInput.classList.remove("invalid");
			contact.phoneError.classList.remove("show");
			contact.phoneInput.classList.remove("valid");
		}
		else{
			contact.phoneInput.classList.remove("default");

			if((!contact.validPhoneNumber(contact.phoneInput.value)) && (contact.phoneInput.value !== ""))  {
				contact.phoneInput.classList.add("invalid");
				contact.phoneInput.classList.remove("valid");	
				contact.phoneError.classList.add("show");
			}
			else if((contact.validPhoneNumber(contact.phoneInput.value)) && (contact.phoneInput.value !== ""))  {
				contact.phoneInput.classList.add("valid");
				contact.phoneInput.classList.remove("invalid");
				contact.phoneError.classList.remove("show");
			}

		}
	},
	// validateMessage
	validateMessage: function validateMessage() {

		if((contact.messageInput.value === "Your Message... (500 character limit)") || (contact.messageInput.value === "")) {
			contact.messageInput.classList.add("default");
			contact.messageInput.classList.remove("invalid");
			contact.messageError.classList.remove("show");
			contact.messageInput.classList.remove("valid");
		}
		else{
			contact.messageInput.classList.remove("default");

			if((!contact.validMessage(contact.messageInput.value)) && (contact.messageInput.value !== ""))  {
				contact.messageInput.classList.add("invalid");
				contact.messageInput.classList.remove("valid");
				contact.messageError.classList.add("show");
			}
			else if((contact.validMessage(contact.messageInput.value)) && (contact.messageInput.value !== ""))  {
				contact.messageInput.classList.add("valid");
				contact.messageInput.classList.remove("invalid");
				contact.messageError.classList.remove("show");
			}
		}

	},
	validateSignUp: function validateSignUp() {

		// Checked all fields are valid
		if((contact.nameInput.classList.contains("default") || contact.nameInput.classList.contains("invalid")) || (contact.emailInput.value === "Your Email..." || contact.emailInput.matches(":invalid")) || (contact.phoneInput.classList.contains("default") || contact.phoneInput.classList.contains("invalid")) || (contact.messageInput.classList.contains("default") || contact.messageInput.classList.contains("invalid"))) {
			contact.signUp.classList.add("deny");

		}
		else{
			contact.signUp.classList.remove("deny");
		}
	},
	validateAllFormFields: function validateAllFormFields() {
		contact.validateName();
		contact.validateEmail();
		contact.validatePhoneNumber();
		contact.validateMessage();
		contact.validateSignUp();
	}
}


// Backdrops and pop-ups
var popup = {
	
	backdrop: document.querySelector(".backdrop"),
	container: document.querySelectorAll(".popup__container"),
	content: document.querySelectorAll(".popup"),
	close: document.querySelectorAll(".popup__close"),
	items: document.querySelectorAll(".popup__content-container"),
	openModal(i) {
		popup.backdrop.classList.add("show");
		popup.container[i].classList.add("show");
		popup.content[i].removeAttribute("aria-hidden");
		popup.content[i].setAttribute("aria-modal", "true");
		document.body.classList.add("hidden-overflow");
		setTimeout(function() {
			popup.content[i].focus();
		}, 405);
	},
	closeModal(i) {
		popup.backdrop.classList.remove("show");
		popup.container[i].classList.remove("show");
		popup.content[i].setAttribute("aria-hidden", "true");
		popup.content[i].removeAttribute("aria-modal");
		document.body.classList.remove("hidden-overflow");
	}


	// tents: document.querySelector("#popup-tents"),
	// cookware: document.querySelector("#popup-cookware"),
	// hammocks: document.querySelector("#popup-hammocks"),
	// boots: document.querySelector("#popup-boots"),
	// backpacks: document.querySelector("#popup-backpacks"),
	// tools: document.querySelector("#popup-tools")
	};



navbar.menubutton.addEventListener("touchstart", function () {

	if(!navbar.menuitems.classList.contains("show")) {
		navbar.showMenu();
		navbar.menutouched = true;
	}
	else if(navbar.menuitems.classList.contains("show")) {
		navbar.hideMenu();
		navbar.menutouched = true;	

	}
});

navbar.menubutton.addEventListener("click", function () {

	if(navbar.menutouched === false) {
		if(!navbar.menuitems.classList.contains("show")) {
			navbar.showMenu();
		}
		else if(navbar.menuitems.classList.contains("show")) {
			navbar.hideMenu();
		}

	}
	navbar.menutouched = false;
});


// Get the offset top of the section elements
var offset = { 
	
servicesY: services.title.offsetTop - 60,
productsY: products.title.offsetTop - 60,
aboutY: about.title.offsetTop - 60,
foundersY: founders.title.offsetTop - 60,
contactY: contact.container.offsetTop - 200
 }; 
// Re-updates the offset upon resizing
window.onresize = function (event) {

	offset.servicesY = services.title.offsetTop - 60;
	offset.productsY = products.title.offsetTop - 60;
	offset.aboutY = about.title.offsetTop - 60;
	offset.foundersY = founders.title.offsetTop - 60;
	offset.contactY = contact.container.offsetTop - 200;
	// console.log(servicesY);
};

// This checks how much the window is scrolled
window.onscroll = function (event)
{


	// Makes the navbar opaque After scrolling down 100 pixels
	if(this.scrollY > 100 ) {
		navbar.header.classList.add("show");
		navbar.title.classList.add("show");
		
	}
	// Makes the navbar transparent After scrolling up past 100 pixels of the window
	else if(this.scrollY < 100) {
		navbar.header.classList.remove("show");
		navbar.title.classList.remove("show");
	}

	

	// console.log(servicesY);

	// unhighlight services after scrolling above its position
	if(this.scrollY < offset.servicesY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			navbar.menuitem[index].classList.remove("current");
		}

	}
	// Highlight services after scrolling down to its position
	else if(this.scrollY > offset.servicesY && this.scrollY < offset.productsY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 0) {
				navbar.menuitem[index].classList.remove("current");

			}

		}
		navbar.menuitem[0].classList.add("current");

	}
	// Highlight products after scrolling down to its position
	else if(this.scrollY > offset.productsY && this.scrollY < offset.aboutY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 1){

			 navbar.menuitem[index].classList.remove("current");

			}
		}
	navbar.menuitem[1].classList.add("current");
	}

	// Highlight about after scrolling down to its position
	else if(this.scrollY > offset.aboutY && this.scrollY < offset.foundersY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 2) {
				navbar.menuitem[index].classList.remove("current");
			}
		}
		navbar.menuitem[2].classList.add("current");
	}

	// Highlight founders after scrolling down to its position
	else if(this.scrollY > offset.foundersY && this.scrollY < offset.contactY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 3) {
				navbar.menuitem[index].classList.remove("current");
			}
		}
		navbar.menuitem[3].classList.add("current");
	}

	// Highlight contact after scrolling down to its position
	else if(this.scrollY > offset.contactY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 4){

			 	navbar.menuitem[index].classList.remove("current");
			}
		}
		navbar.menuitem[4].classList.add("current");
	}

}



// Clicking each item in the products will open the backdrop pop-up window
for (let i = 0; i < products.items.length; i++) {
	products.items[i].addEventListener("click", function() {
		popup.openModal(i);

	});

	products.items[i].addEventListener("keydown", function(event){
		if(event.key === "Enter" || event.which === 13 || event.keyCode === 13) {
			popup.openModal(i);

		}
	});
}



// close the popup and the backdrop upon clicking the close button
// or clicking the backdrop
for (let i = 0; i < popup.close.length; i++) {


	popup.close[i].addEventListener("click", function(event){
		popup.closeModal(i);
	});

	popup.container[i].addEventListener("click", function(event){
		if(!((event.target === popup.content[i]) || (popup.content[i].contains(event.target)))) {
	
			popup.closeModal(i);
		// console.log(event.target);
		}
	});

	popup.content[i].addEventListener("keydown", function(event){
		if(event.key === "Escape" || event.keyCode === 27 || event.which === 27) {

			popup.closeModal(i);
		}
	});
}





// Make the founders links have a focused class on focus and have it removed on blur
for(let i = 0; i < founders.links.length; i++){
	founders.links[i].addEventListener("focus", function (){
		founders.svgs[i].classList.add("focused");
	})
}

for(let i = 0; i < founders.links.length; i++){
	founders.links[i].addEventListener("blur", function (){
		founders.svgs[i].classList.remove("focused");
	})
}
	
contact.validateAllFormFields();


contact.nameInput.addEventListener("focus", function(){
	contact.validateName();
	contact.nameInput.classList.remove("default");
});
contact.nameInput.addEventListener("blur", function(){
	contact.validateName();
	contact.validateSignUp();
});


contact.emailInput.addEventListener("focus", function(){
	contact.validateEmail();
	contact.emailInput.classList.remove("default");
});
contact.emailInput.addEventListener("blur", function(){
	contact.validateEmail();
	contact.validateSignUp();
});


contact.phoneInput.addEventListener("focus", function(){
	contact.validatePhoneNumber();
	contact.phoneInput.classList.remove("default");
});
contact.phoneInput.addEventListener("blur", function(){
	contact.validatePhoneNumber();
	contact.validateSignUp();
});


contact.messageInput.addEventListener("focus", function(){
	contact.validateMessage();
	contact.messageInput.classList.remove("default");
});
contact.messageInput.addEventListener("blur", function(){
	contact.validateMessage();
	contact.validateSignUp();
});


contact.signUp.addEventListener("mouseover", function(){
	contact.validateSignUp();
});


