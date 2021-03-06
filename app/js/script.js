
const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
	console.log('Menu button clicked');
	if (header.classList.contains('open')) {
		// Close hamburger menu
		header.classList.remove('open');
        body.classList.remove('noscroll');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		// Open hamburger menu
		header.classList.add('open');
        body.classList.add('noscroll');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});
