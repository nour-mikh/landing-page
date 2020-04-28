/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const containerNumber = document.getElementsByClassName("landing__container").length;
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const scrollTopBtn = document.getElementById("scrollTop");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollToTop(){
	window.scrollTo(0,0)
}
function userScrolled(){
	let y = window.scrollY;
	if (y < 10){
		scrollTopBtn.setAttribute("style", "display: none");
	} else {
		scrollTopBtn.setAttribute("style", "display: block")
	}
}
window.addEventListener("scroll", ()=> userScrolled());


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav based on the number os sections stored in containerNumber
function buildMenu(){
	for(let i=0; i<containerNumber; i++){
	    let listElement = document.createElement("li");
	    navBar.appendChild(listElement);
	    let sectionNumber = i + 1;
	    let sectionName = document.getElementById("section" + sectionNumber).dataset.nav;
	    listElement.innerHTML = sectionName; 
	    listElement.className = "menu__link";
	  }

}
/* Add class 'active' to section when near top of viewport and change the 
background color in the nav of the sectio in view
*/
function isActive(){
	const navElements = document.querySelectorAll(".menu__link");
	let y = 0;
	for(section of sections){
		let sec = section.getBoundingClientRect();
		if (sec.top > -100 && sec.top < 633){
			section.className = "your-active-class";
			navElements[y].setAttribute("style", "background-color: #b6e3e9");
		} else if (section.className == "your-active-class"){
			section.classList.remove("your-active-class");
			navElements[y].setAttribute("style", "background-color: #fadee1")
		}
		y++
	}
}


// Scroll to anchor ID by editing the html of the element in the nav of theusing scrollTO event 
function scrollToSection(){
	const navElements = document.querySelectorAll(".menu__link");
	let x = 0;
		for (el of navElements){
			let sectionId = "section" + String(x+1);
			el.innerHTML = "<a href=#" + sectionId +  "> " + "Section " + String(x+1) + "</a>";
			let pressedEl = navElements[x];
	  		navElements[x].addEventListener("click", function(){
 			 	pressedEl.scrollIntoView({block: 'end', behavior: 'smooth'})
	  		})
	  		x++;
		}

}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu();
// Scroll to section on link click
scrollToSection();
// Set sections as active
window.addEventListener("scroll", ()=>isActive());


