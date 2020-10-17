//
// - - - - - - - - - - Hamburger Animation - - - - - - - - - - //
//

// Variables:

const menuToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.menulink');

// Utility Function

function hamburgerToggle () {
	document.body.classList.toggle('nav-open');
	navbar.classList.toggle('navbar-open');
}

// Event Listeners:

menuToggle.addEventListener('click', () => {
	hamburgerToggle();
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		hamburgerToggle();
	});
});
