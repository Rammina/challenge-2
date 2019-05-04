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

var services = { 
	title: document.querySelector("#services")

};
// Product section object
var products = { 
	title: document.querySelector("#products"),
	items: document.querySelectorAll(".products__overlay")
};

// Backdrops and pop-ups
var popup = {
	
	backdrop: document.querySelector(".backdrop"),
	content: document.querySelector(".popup"),
	close: document.querySelector(".popup__close"),
	items: document.querySelectorAll(".popup__content-container"),



	// tents: document.querySelector("#popup-tents"),
	// cookware: document.querySelector("#popup-cookware"),
	// hammocks: document.querySelector("#popup-hammocks"),
	// boots: document.querySelector("#popup-boots"),
	// backpacks: document.querySelector("#popup-backpacks"),
	// tools: document.querySelector("#popup-tools")
	};

var founders = {

	svgs: document.querySelectorAll(".founders__svg"),
	links: document.querySelectorAll(".founders__logo-link")
}


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
var servicesY = services.title.offsetTop - 48;
var productsY = products.title.offsetTop - 48;

// Re-updates the offset upon resizing
window.onresize = function (event) {

	servicesY = services.title.offsetTop - 48;
	productsY = products.title.offsetTop - 48;

	console.log(servicesY);
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
	if(this.scrollY < servicesY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			navbar.menuitem[index].classList.remove("current");
		}

	}
	// Highlight services after scrolling down to its position
	else if(this.scrollY > servicesY && this.scrollY < productsY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 0) {
				navbar.menuitem[index].classList.remove("current");

			}

		}
		navbar.menuitem[0].classList.add("current");

	}
	// Highlight products after scrolling down to its position
	else if(this.scrollY > productsY) {
		for(let index = 0; index < navbar.menuitem.length; index++) {
			if(index !== 1) {
				navbar.menuitem[index].classList.remove("current");

			}

		}
		navbar.menuitem[1].classList.add("current");

	}

}



// Clicking each item in the products will open the backdrop pop-up window
for (let i = 0; i < products.items.length; i++) {
	products.items[i].addEventListener("click", function() {
		popup.backdrop.classList.add("show");
		popup.content.classList.add("show");

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
});

popup.backdrop.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
	popup.content.classList.remove("show");
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