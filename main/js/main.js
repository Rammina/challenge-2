// document objects

// navigation bar objects

let navbar = {
	header: document.querySelector(".main-header"),
	title: document.querySelector("#nav__title"),
	menubutton: document.querySelector("#nav__menu"),
	menuitems: document.querySelector(".nav__items")

}



navbar.menubutton.addEventListener("click", function showMenu(){
	navbar.menuitems.classList.toggle("show");
});



window.onscroll = function (event)
{
	if(this.scrollY > 100 ) {
		navbar.header.classList.add("show");
		navbar.title.classList.add("show");
		
	}
	else if(this.scrollY < 100) {
		navbar.header.classList.remove("show");
		navbar.title.classList.remove("show");
	}
}