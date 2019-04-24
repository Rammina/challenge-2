// document objects

// navigation bar objects

let navbar = {
	header: document.querySelector(".main-header"),
	title: document.querySelector("#nav__title"),
	menubutton: document.querySelector("#nav__menu"),
	menuitems: document.querySelector(".nav__items"),
	menuitem: document.querySelectorAll(".nav__item")

}

// Main objects

let services = { 
	title: document.querySelector("#services")

};
// Product section object
let products = { 
	title: document.querySelector("#products"),
	items: document.querySelectorAll(".products__overlay")
};

// Backdrops and pop-ups
let popup = {
	
	backdrop: document.querySelector(".backdrop"),
	content: document.querySelector(".popup"),
	close: document.querySelector(".popup__close")
	};



navbar.menubutton.addEventListener("click", function showMenu(){
	navbar.menuitems.classList.toggle("show");
});

// Get the offset top of the section elements 
let servicesY = services.title.offsetTop - 48;
let productsY = products.title.offsetTop - 48;

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
for (let item of products.items){
	item.addEventListener("click", function(){
		popup.backdrop.classList.add("show");
		popup.content.classList.add("show");
	});
}

popup.close.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
	popup.content.classList.remove("show");
});

popup.backdrop.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
	popup.content.classList.remove("show");
});