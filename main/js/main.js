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
	},
	hideMenu: function hideMenu() {
		navbar.menuitems.classList.remove("show")
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
	items: document.querySelectorAll(".products__overlay")
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
	signUpValid: false
}


// Backdrops and pop-ups
var popup = {
	
	backdrop: document.querySelector(".backdrop"),
	content: document.querySelector(".popup__container"),
	close: document.querySelector(".popup__close"),
	items: document.querySelectorAll(".popup__content-container"),



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
		popup.backdrop.classList.add("show");
		popup.content.classList.add("show");
		document.body.classList.add("hidden-overflow");

		if (i == 0) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 0) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 0) {
					popup.items[i].classList.add("show");
				}
			}
		}
		else if (i == 1) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 1) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 1) {
					popup.items[i].classList.add("show");
				}
			}
		}
		else if (i == 2) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 2) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 2) {
					popup.items[i].classList.add("show");
				}
			}
		}
		else if (i == 3) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 3) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 3) {
					popup.items[i].classList.add("show");
				}
			}
		}
		else if (i == 4) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 4) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 4) {
					popup.items[i].classList.add("show");
				}
			}
		}
		else if (i == 5) {
			for(let i = 0; i < popup.items.length; i++) {
				if (i !== 5) {
					popup.items[i].classList.remove("show");
				}
				else if (i === 5) {
					popup.items[i].classList.add("show");
				}
			}
		}
	});
}


// close the popup and the backdrop upon clicking the close button
// or clicking the backdrop

popup.close.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
	popup.content.classList.remove("show");
	document.body.classList.remove("hidden-overflow");
});

popup.backdrop.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
	popup.content.classList.remove("show");
	document.body.classList.remove("hidden-overflow");
});

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

// Functions that get rid of placeholders
// The first one restores the placeholder if the default value is not changed
function fillField(input,val) {
      if(input.value === "")
         input.value=val;
};

// The second one removes the placeholder when the input box is on focus
function clearField(input,val) {
      if(input.value === val)
         input.value="";
};

function validNameField(string) {
	let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	let notValid = regex.test(string);
	if(notValid) {
		return false;
	}
	if(string.length > 100) {
		return false;

	}
	return true;
	
}

function validPhoneNumber(string) {
	let digits = string.match(/\d/g);

	return ((digits) && (digits.length <= 15 && digits.length >= 4));

}

function validMessage(string) {
	return (string.length <= 500);
}

function validateSignUp() {


	if((contact.nameInput.value === "Your Name...") || (contact.nameInput.value === ""))  {
		contact.nameInput.classList.add("default");
		contact.nameInput.classList.remove("valid");
		contact.nameInput.classList.remove("invalid");
		contact.nameError.classList.remove("show");
	}
	else{
		contact.nameInput.classList.remove("default");
	

		if((!validNameField(contact.nameInput.value)) && (contact.nameInput.value !== ""))  {
			contact.nameInput.classList.add("invalid");
			contact.nameError.classList.add("show");
			contact.nameInput.classList.remove("valid");
		}
		else if((validNameField(contact.nameInput.value)) && (contact.nameInput.value !== ""))  {
			contact.nameInput.classList.add("valid");
			contact.nameInput.classList.remove("invalid");
			contact.nameError.classList.remove("show");
		}
	}

	if (contact.emailInput.value === "Your Email...") {
		contact.emailInput.classList.add("default");
		contact.signUp.classList.add("deny");
		contact.emailInput.classList.remove("invalid");
		contact.emailError.classList.remove("show");
		contact.emailInput.classList.remove("valid");
	}
	else {
		if (contact.emailInput.matches(':invalid')) {
			contact.signUp.classList.add("deny");
			contact.emailInput.classList.add("invalid");
			contact.emailError.classList.add("show");
			contact.emailInput.classList.remove("valid");
			contact.emailInput.classList.remove("default");
			// console.log("invalid check");
		}
		else if ((contact.emailInput.matches(':valid')) && contact.emailInput.value !== "") {
			contact.signUp.classList.remove("deny");
			contact.emailInput.classList.add("valid");
			contact.emailInput.classList.remove("invalid");
			contact.emailError.classList.remove("show");
			contact.emailInput.classList.remove("default");
			
			// console.log("valid check");
		}

		if(contact.emailInput.value === "") {
			contact.emailInput.classList.remove("default");
		}
	}

	if((contact.phoneInput.value === "Your Phone Number...") || (contact.phoneInput.value === ""))  {
		contact.phoneInput.classList.add("default");
		contact.phoneInput.classList.remove("invalid");
		contact.phoneError.classList.remove("show");
		contact.phoneInput.classList.remove("valid");
	}
	else{
		contact.phoneInput.classList.remove("default");

		if((!validPhoneNumber(contact.phoneInput.value)) && (contact.phoneInput.value !== ""))  {
			contact.phoneInput.classList.add("invalid");
			contact.phoneInput.classList.remove("valid");	
			contact.phoneError.classList.add("show");
		}
		else if((validPhoneNumber(contact.phoneInput.value)) && (contact.phoneInput.value !== ""))  {
			contact.phoneInput.classList.add("valid");
			contact.phoneInput.classList.remove("invalid");
			contact.phoneError.classList.remove("show");
		}

	}

	if((contact.messageInput.value === "Your Message... (500 character limit)") || (contact.messageInput === "")) {
		contact.messageInput.classList.add("default");
		contact.messageInput.classList.remove("invalid");
		contact.messageError.classList.remove("show");
		contact.messageInput.classList.remove("valid");
	}
	else{
		contact.messageInput.classList.remove("default");

		if((!validMessage(contact.messageInput.value)) && (contact.messageInput.value !== ""))  {
			contact.messageInput.classList.add("invalid");
			contact.messageInput.classList.remove("valid");
			contact.messageError.classList.add("show");
		}
		else if((validMessage(contact.messageInput.value)) && (contact.messageInput.value !== ""))  {
			contact.messageInput.classList.add("valid");
			contact.messageInput.classList.remove("invalid");
			contact.messageError.classList.remove("show");
		}
	}

	// Checked all fields are valid
	if((contact.nameInput.classList.contains("default") || contact.nameInput.classList.contains("invalid")) || (contact.emailInput.value === "Your Email..." || contact.emailInput.matches(":invalid")) || (contact.phoneInput.value === "" || contact.phoneInput.value === "Your Phone Number..." ) || (contact.messageInput.value === "" || contact.messageInput.value === "Your Message... (500 character limit)")) {
		contact.signUp.classList.add("deny");

	}
	else{
		contact.signUp.classList.remove("deny");
	}


}

validateSignUp();


contact.nameInput.addEventListener("focus", function(){
	validateSignUp();
	contact.nameInput.classList.remove("default");
});
contact.nameInput.addEventListener("blur", function(){
	validateSignUp();
});


contact.emailInput.addEventListener("focus", function(){
	validateSignUp();
	contact.emailInput.classList.remove("default");
});
contact.emailInput.addEventListener("blur", function(){
	validateSignUp();
});


contact.phoneInput.addEventListener("focus", function(){
	validateSignUp();
	contact.phoneInput.classList.remove("default");
});
contact.phoneInput.addEventListener("blur", function(){
	validateSignUp();
});


contact.messageInput.addEventListener("focus", function(){
	validateSignUp();
	contact.messageInput.classList.remove("default");
});
contact.messageInput.addEventListener("blur", function(){
	validateSignUp();
});


contact.signUp.addEventListener("mouseover", function(){
	validateSignUp();
});


