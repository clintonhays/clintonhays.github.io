//
// - - - - - - - - - - Hamburger Animation - - - - - - - - - - //
//

// Global Variables:

const menuToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.menulink');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// Utility Functions

function hamburgerToggle () {
	// toggles classes to transition navbar
	document.body.classList.toggle('nav-open');
	navbar.classList.toggle('navbar-open');
}

function openModal (modal) {
	// check if modal exists, add active class to modal & overlay
	if (modal === null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}

function closeModal (modal) {
	// check if modal exists, remove active class to modal & overlay
	if (modal === null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

// Event Listeners:

menuToggle.addEventListener('click', () => {
	hamburgerToggle();
});

links.forEach((link) => {
	// makes navlinks trigger toggle function
	link.addEventListener('click', () => {
		hamburgerToggle();
	});
});

openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});
