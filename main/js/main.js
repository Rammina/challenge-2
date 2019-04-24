// document objects

// navigation bar objects

let navbar = {
	header: document.querySelector(".main-header"),
	title: document.querySelector("#nav__title"),
	menubutton: document.querySelector("#nav__menu"),
	menuitems: document.querySelector(".nav__items")

}

// Main objects

// Product section object
let products = { 
	items: document.querySelectorAll(".products__overlay")
};

// Backdrops and pop-ups
let popup = {
	backdrop: document.querySelector(".backdrop"),
	close: document.querySelector(".popup__close")
	};



navbar.menubutton.addEventListener("click", function showMenu(){
	navbar.menuitems.classList.toggle("show");
});


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
}

// Clicking each item in the products will open the backdrop pop-up window
for (let item of products.items){
	item.addEventListener("click", function(){
		popup.backdrop.classList.add("show");
	});
}

popup.close.addEventListener("click", function(){
	popup.backdrop.classList.remove("show");
});